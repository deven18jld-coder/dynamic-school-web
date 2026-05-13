-- Migration 005 — Events Table
-- Table: events (FK → gallery_albums, nullable)

-- ============================================================
-- Table: events
-- School events and celebrations
-- ============================================================
CREATE TABLE IF NOT EXISTS events (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title             TEXT NOT NULL,
  slug              TEXT UNIQUE,
  description       TEXT,
  body              TEXT,                  -- Rich text for event detail page
  category          TEXT CHECK (category IN ('sports', 'cultural', 'academic', 'ceremony', 'other')),
  event_date        DATE NOT NULL,
  event_time        TEXT,                  -- e.g., "10:00 AM"
  venue             TEXT,
  cover_image_url   TEXT,
  gallery_album_id  UUID REFERENCES gallery_albums(id) ON DELETE SET NULL,  -- Optional linked gallery
  status            TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'past')),
  is_published      BOOLEAN DEFAULT true,
  created_at        TIMESTAMPTZ DEFAULT now(),
  updated_at        TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_events_event_date ON events(event_date DESC);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);
CREATE INDEX IF NOT EXISTS idx_events_is_published ON events(is_published);
CREATE INDEX IF NOT EXISTS idx_events_gallery_album_id ON events(gallery_album_id);
CREATE INDEX IF NOT EXISTS idx_events_slug ON events(slug);

-- ============================================================
-- Enable Row Level Security
-- ============================================================
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- RLS Policies: events
-- ============================================================
CREATE POLICY "Public can view published events"
  ON events FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage events"
  ON events FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- Auto-update trigger
-- ============================================================
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
