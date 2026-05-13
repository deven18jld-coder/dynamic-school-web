-- Migration 001 — Core Configuration Tables
-- Tables: school_settings, admin_users, homepage_content, mandatory_disclosure

-- ============================================================
-- Table: school_settings
-- Single-row configuration table for school-wide settings
-- ============================================================
CREATE TABLE IF NOT EXISTS school_settings (
  id              INT PRIMARY KEY DEFAULT 1,
  school_name     TEXT,
  tagline         TEXT,
  board_affiliation TEXT,          -- CBSE / ICSE / State
  affiliation_number TEXT,
  school_code     TEXT,
  established_year INT,
  principal_name  TEXT,
  director_name   TEXT,
  phone_primary   TEXT,
  phone_secondary TEXT,
  whatsapp_number TEXT,
  email_primary   TEXT,
  email_admissions TEXT,
  address         TEXT,
  city            TEXT,
  state           TEXT,
  pincode         TEXT,
  google_maps_embed_url TEXT,
  admission_open  BOOLEAN DEFAULT false,
  logo_url        TEXT,
  og_image_url    TEXT,
  facebook_url    TEXT,
  instagram_url   TEXT,
  youtube_url     TEXT,
  twitter_url     TEXT,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now(),

  -- Ensure only one row can exist
  CONSTRAINT school_settings_single_row CHECK (id = 1)
);

-- ============================================================
-- Table: admin_users
-- Admin panel users linked to Supabase Auth
-- ============================================================
CREATE TABLE IF NOT EXISTS admin_users (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email       TEXT UNIQUE NOT NULL,
  full_name   TEXT,
  role        TEXT NOT NULL DEFAULT 'content_admin' CHECK (role IN ('super_admin', 'content_admin')),
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: homepage_content
-- Editable homepage sections (stats, USPs, hero, etc.)
-- ============================================================
CREATE TABLE IF NOT EXISTS homepage_content (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_key TEXT UNIQUE NOT NULL,   -- e.g., "stats", "why_choose_us", "hero"
  content     JSONB,                  -- Flexible JSON for section-specific data
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: mandatory_disclosure
-- CBSE Mandatory Disclosure fields
-- ============================================================
CREATE TABLE IF NOT EXISTS mandatory_disclosure (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  field_name    TEXT NOT NULL,
  field_value   TEXT,
  document_url  TEXT,               -- For downloadable docs
  sort_order    INT DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_homepage_content_section_key ON homepage_content(section_key);
CREATE INDEX IF NOT EXISTS idx_mandatory_disclosure_sort_order ON mandatory_disclosure(sort_order);

-- ============================================================
-- Enable Row Level Security
-- ============================================================
ALTER TABLE school_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE homepage_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE mandatory_disclosure ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- RLS Policies: school_settings
-- ============================================================
-- Public can read school settings (needed for navbar, footer, etc.)
CREATE POLICY "Public can view school settings"
  ON school_settings FOR SELECT
  USING (true);

-- Admins can update school settings
CREATE POLICY "Admins can manage school settings"
  ON school_settings FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: admin_users
-- ============================================================
-- Only admins can read admin_users table
CREATE POLICY "Admins can view admin users"
  ON admin_users FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- Only super_admins can manage admin users
CREATE POLICY "Super admins can manage admin users"
  ON admin_users FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
      AND role = 'super_admin'
    )
  );

-- ============================================================
-- RLS Policies: homepage_content
-- ============================================================
-- Public can read active homepage content
CREATE POLICY "Public can view active homepage content"
  ON homepage_content FOR SELECT
  USING (is_active = true);

-- Admins can manage homepage content
CREATE POLICY "Admins can manage homepage content"
  ON homepage_content FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: mandatory_disclosure
-- ============================================================
-- Public can read mandatory disclosure
CREATE POLICY "Public can view mandatory disclosure"
  ON mandatory_disclosure FOR SELECT
  USING (true);

-- Admins can manage mandatory disclosure
CREATE POLICY "Admins can manage mandatory disclosure"
  ON mandatory_disclosure FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- Auto-update updated_at trigger function
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to tables with updated_at
CREATE TRIGGER update_school_settings_updated_at
  BEFORE UPDATE ON school_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_homepage_content_updated_at
  BEFORE UPDATE ON homepage_content
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mandatory_disclosure_updated_at
  BEFORE UPDATE ON mandatory_disclosure
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
