-- Migration 002 — Independent Content Tables
-- Tables: enquiries, notices, staff_profiles, testimonials, transport_routes, downloadable_files, careers

-- ============================================================
-- Table: enquiries
-- Stores all admission enquiry form submissions
-- ============================================================
CREATE TABLE IF NOT EXISTS enquiries (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name   TEXT NOT NULL,
  student_name  TEXT,
  class_applying TEXT,              -- "Class 1", "Nursery", "Class 9", etc.
  phone         TEXT NOT NULL,
  email         TEXT,
  city          TEXT,
  message       TEXT,
  source_page   TEXT,               -- Which page the form was submitted from
  status        TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'enrolled', 'not_interested')),
  admin_notes   TEXT,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: notices
-- School notice board
-- ============================================================
CREATE TABLE IF NOT EXISTS notices (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  category      TEXT CHECK (category IN ('exam', 'holiday', 'general', 'urgent', 'circular')),
  description   TEXT,
  pdf_url       TEXT,               -- Optional PDF from Supabase Storage
  is_urgent     BOOLEAN DEFAULT false,
  is_published  BOOLEAN DEFAULT true,
  published_at  TIMESTAMPTZ DEFAULT now(),
  expires_at    TIMESTAMPTZ,        -- Optional expiry
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: staff_profiles
-- Faculty and staff information
-- ============================================================
CREATE TABLE IF NOT EXISTS staff_profiles (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name             TEXT NOT NULL,
  designation      TEXT NOT NULL,
  department       TEXT CHECK (department IN ('primary', 'middle', 'senior', 'sports', 'administration')),
  qualification    TEXT,
  experience_years INT,
  subject          TEXT,
  bio              TEXT,
  photo_url        TEXT,
  email            TEXT,
  is_published     BOOLEAN DEFAULT true,
  sort_order       INT DEFAULT 0,
  created_at       TIMESTAMPTZ DEFAULT now(),
  updated_at       TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: testimonials
-- Parent testimonials
-- ============================================================
CREATE TABLE IF NOT EXISTS testimonials (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name   TEXT NOT NULL,
  child_class   TEXT,
  message       TEXT NOT NULL,
  rating        INT CHECK (rating >= 1 AND rating <= 5),
  photo_url     TEXT,
  is_featured   BOOLEAN DEFAULT false,
  is_published  BOOLEAN DEFAULT true,
  sort_order    INT DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: transport_routes
-- School transport route information
-- ============================================================
CREATE TABLE IF NOT EXISTS transport_routes (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_name    TEXT NOT NULL,
  areas_covered TEXT,               -- Comma-separated or JSON
  pickup_time   TEXT,
  drop_time     TEXT,
  contact_name  TEXT,
  contact_phone TEXT,
  monthly_fee   TEXT,               -- Optional, or "Contact School"
  is_active     BOOLEAN DEFAULT true,
  sort_order    INT DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: downloadable_files
-- Prospectus, admission forms, fee brochures, etc.
-- ============================================================
CREATE TABLE IF NOT EXISTS downloadable_files (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  type            TEXT CHECK (type IN ('prospectus', 'admission-form', 'fee-brochure', 'holiday-list', 'syllabus', 'other')),
  file_url        TEXT NOT NULL,     -- Supabase Storage URL
  file_size_kb    INT,
  download_count  INT DEFAULT 0,
  is_active       BOOLEAN DEFAULT true,
  sort_order      INT DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: careers
-- Open job positions
-- ============================================================
CREATE TABLE IF NOT EXISTS careers (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  position_title        TEXT NOT NULL,
  department            TEXT,
  qualification_required TEXT,
  experience_required   TEXT,
  job_type              TEXT CHECK (job_type IN ('full-time', 'part-time', 'contract')),
  description           TEXT,
  how_to_apply          TEXT,
  last_date             DATE,
  is_active             BOOLEAN DEFAULT true,
  created_at            TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_phone ON enquiries(phone);

CREATE INDEX IF NOT EXISTS idx_notices_category ON notices(category);
CREATE INDEX IF NOT EXISTS idx_notices_is_published ON notices(is_published);
CREATE INDEX IF NOT EXISTS idx_notices_published_at ON notices(published_at DESC);

CREATE INDEX IF NOT EXISTS idx_staff_department ON staff_profiles(department);
CREATE INDEX IF NOT EXISTS idx_staff_is_published ON staff_profiles(is_published);
CREATE INDEX IF NOT EXISTS idx_staff_sort_order ON staff_profiles(sort_order);

CREATE INDEX IF NOT EXISTS idx_testimonials_is_featured ON testimonials(is_featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_is_published ON testimonials(is_published);

CREATE INDEX IF NOT EXISTS idx_downloadable_files_type ON downloadable_files(type);
CREATE INDEX IF NOT EXISTS idx_downloadable_files_is_active ON downloadable_files(is_active);

CREATE INDEX IF NOT EXISTS idx_careers_is_active ON careers(is_active);

-- ============================================================
-- Enable Row Level Security
-- ============================================================
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE transport_routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloadable_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE careers ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- RLS Policies: enquiries
-- ============================================================
-- Anyone can submit an enquiry
CREATE POLICY "Anyone can submit enquiry"
  ON enquiries FOR INSERT
  WITH CHECK (true);

-- Only admins can read enquiries
CREATE POLICY "Admins can view enquiries"
  ON enquiries FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- Admins can update enquiries (status, notes)
CREATE POLICY "Admins can update enquiries"
  ON enquiries FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- Admins can delete enquiries
CREATE POLICY "Admins can delete enquiries"
  ON enquiries FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: notices
-- ============================================================
CREATE POLICY "Public can view published notices"
  ON notices FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage notices"
  ON notices FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: staff_profiles
-- ============================================================
CREATE POLICY "Public can view published staff"
  ON staff_profiles FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage staff profiles"
  ON staff_profiles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: testimonials
-- ============================================================
CREATE POLICY "Public can view published testimonials"
  ON testimonials FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage testimonials"
  ON testimonials FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: transport_routes
-- ============================================================
CREATE POLICY "Public can view active transport routes"
  ON transport_routes FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage transport routes"
  ON transport_routes FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: downloadable_files
-- ============================================================
CREATE POLICY "Public can view active downloadable files"
  ON downloadable_files FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage downloadable files"
  ON downloadable_files FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: careers
-- ============================================================
CREATE POLICY "Public can view active careers"
  ON careers FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage careers"
  ON careers FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- Auto-update triggers for updated_at
-- ============================================================
CREATE TRIGGER update_notices_updated_at
  BEFORE UPDATE ON notices
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_staff_profiles_updated_at
  BEFORE UPDATE ON staff_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_downloadable_files_updated_at
  BEFORE UPDATE ON downloadable_files
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
