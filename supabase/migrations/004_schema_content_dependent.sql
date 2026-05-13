-- Migration 004 — Content Tables with Optional Dependencies
-- Tables: achievements, results, result_summaries, blog_posts

-- ============================================================
-- Table: achievements
-- Student achievements across categories and levels
-- ============================================================
CREATE TABLE IF NOT EXISTS achievements (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name  TEXT NOT NULL,
  class         TEXT,
  title         TEXT NOT NULL,
  description   TEXT,
  category      TEXT CHECK (category IN ('sports', 'olympiad', 'quiz', 'arts', 'academic', 'cultural')),
  level         TEXT CHECK (level IN ('school', 'district', 'state', 'national', 'international')),
  award_date    DATE,
  photo_url     TEXT,
  is_featured   BOOLEAN DEFAULT false,
  is_published  BOOLEAN DEFAULT true,
  sort_order    INT DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: results
-- Board exam result toppers
-- ============================================================
CREATE TABLE IF NOT EXISTS results (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  year            INT NOT NULL,           -- e.g., 2024
  class           TEXT NOT NULL,           -- "Class 10" or "Class 12"
  student_name    TEXT NOT NULL,
  photo_url       TEXT,
  percentage      NUMERIC,                -- e.g., 98.4
  marks_obtained  TEXT,                    -- For CBSE aggregate
  stream          TEXT,                    -- Science / Commerce / Arts (for Class 12)
  rank            INT,                     -- School rank (1 = topper)
  is_published    BOOLEAN DEFAULT true,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: result_summaries
-- Aggregate stats per year and class
-- ============================================================
CREATE TABLE IF NOT EXISTS result_summaries (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  year                    INT NOT NULL,
  class                   TEXT NOT NULL,
  pass_percentage         NUMERIC,
  total_students          INT,
  distinctions            INT,
  highest_score           TEXT,
  congratulations_message TEXT,
  is_published            BOOLEAN DEFAULT true,
  created_at              TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Table: blog_posts
-- News, blog articles, school updates
-- ============================================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title             TEXT NOT NULL,
  slug              TEXT UNIQUE NOT NULL,
  category          TEXT CHECK (category IN ('school-news', 'academic', 'sports', 'cultural', 'achievement')),
  featured_image_url TEXT,
  excerpt           TEXT,                  -- Short description (max 300 chars)
  body              TEXT,                  -- Rich text HTML content
  author_name       TEXT,
  tags              TEXT[],                -- PostgreSQL array
  meta_title        TEXT,                  -- SEO title (max 60 chars)
  meta_description  TEXT,                  -- SEO description (max 160 chars)
  og_image_url      TEXT,
  status            TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  is_featured       BOOLEAN DEFAULT false,
  published_at      TIMESTAMPTZ,
  created_at        TIMESTAMPTZ DEFAULT now(),
  updated_at        TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_achievements_category ON achievements(category);
CREATE INDEX IF NOT EXISTS idx_achievements_level ON achievements(level);
CREATE INDEX IF NOT EXISTS idx_achievements_is_featured ON achievements(is_featured);
CREATE INDEX IF NOT EXISTS idx_achievements_is_published ON achievements(is_published);

CREATE INDEX IF NOT EXISTS idx_results_year ON results(year);
CREATE INDEX IF NOT EXISTS idx_results_class ON results(class);
CREATE INDEX IF NOT EXISTS idx_results_is_published ON results(is_published);

CREATE INDEX IF NOT EXISTS idx_result_summaries_year ON result_summaries(year);
CREATE INDEX IF NOT EXISTS idx_result_summaries_class ON result_summaries(class);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_featured ON blog_posts(is_featured);

-- ============================================================
-- Enable Row Level Security
-- ============================================================
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE results ENABLE ROW LEVEL SECURITY;
ALTER TABLE result_summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- RLS Policies: achievements
-- ============================================================
CREATE POLICY "Public can view published achievements"
  ON achievements FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage achievements"
  ON achievements FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: results
-- ============================================================
CREATE POLICY "Public can view published results"
  ON results FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage results"
  ON results FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: result_summaries
-- ============================================================
CREATE POLICY "Public can view published result summaries"
  ON result_summaries FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage result summaries"
  ON result_summaries FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid()
      AND is_active = true
    )
  );

-- ============================================================
-- RLS Policies: blog_posts
-- ============================================================
-- Public can only view published blog posts
CREATE POLICY "Public can view published blog posts"
  ON blog_posts FOR SELECT
  USING (status = 'published');

CREATE POLICY "Admins can manage blog posts"
  ON blog_posts FOR ALL
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
CREATE TRIGGER update_achievements_updated_at
  BEFORE UPDATE ON achievements
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
