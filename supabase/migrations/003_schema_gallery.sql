-- Migration 003 — Gallery Tables
-- Tables: gallery_albums, gallery_images (FK → gallery_albums)

-- ============================================================
-- Table: gallery_albums
-- Photo albums organized by event/category
-- ============================================================
CREATE TABLE IF NOT EXISTS gallery_albums (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  description     TEXT,
  cover_image_url TEXT,
  category        TEXT CHECK (category IN ('annual-day', 'sports', 'cultural', 'classroom', 'infrastructure', 'other')),
  event_date      DATE,
  is_published    BOOLEAN DEFAULT true,
  sort_order      INT DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: gallery_images
-- Individual images within an album
-- ============================================================
CREATE TABLE IF NOT EXISTS gallery_images (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  album_id    UUID NOT NULL REFERENCES gallery_albums(id) ON DELETE CASCADE,
  image_url   TEXT NOT NULL,
  alt_text    TEXT,
  caption     TEXT,
  sort_order  INT DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_gallery_albums_slug ON gallery_albums(slug);
CREATE INDEX IF NOT EXISTS idx_gallery_albums_category ON gallery_albums(category);
CREATE INDEX IF NOT EXISTS idx_gallery_albums_is_published ON gallery_albums(is_published);
CREATE INDEX IF NOT EXISTS idx_gallery_albums_sort_order ON gallery_albums(sort_order);

CREATE INDEX IF NOT EXISTS idx_gallery_images_album_id ON gallery_images(album_id);
CREATE INDEX IF NOT EXISTS idx_gallery_images_sort_order ON gallery_images(sort_order);

-- ============================================================
-- Enable Row Level Security
-- ============================================================
ALTER TABLE gallery_albums ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- RLS Policies: gallery_albums
-- ============================================================
CREATE POLICY "Public can view published gallery albums"
  ON gallery_albums FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage gallery albums"
  ON gallery_albums FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: gallery_images
-- ============================================================
-- Public can view images from published albums
CREATE POLICY "Public can view images from published albums"
  ON gallery_images FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM gallery_albums
      WHERE gallery_albums.id = gallery_images.album_id
      AND gallery_albums.is_published = true
    )
  );

CREATE POLICY "Admins can manage gallery images"
  ON gallery_images FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- Auto-update triggers
-- ============================================================
CREATE TRIGGER update_gallery_albums_updated_at
  BEFORE UPDATE ON gallery_albums
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
