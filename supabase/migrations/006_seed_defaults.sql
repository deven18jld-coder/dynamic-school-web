-- Migration 006 — Seed Default Data
-- Insert default school_settings row and homepage_content sections

-- ============================================================
-- Default school_settings row (id=1)
-- ============================================================
INSERT INTO school_settings (
  id,
  school_name,
  tagline,
  board_affiliation,
  affiliation_number,
  school_code,
  established_year,
  principal_name,
  director_name,
  phone_primary,
  phone_secondary,
  whatsapp_number,
  email_primary,
  email_admissions,
  address,
  city,
  state,
  pincode,
  google_maps_embed_url,
  admission_open,
  logo_url,
  og_image_url,
  facebook_url,
  instagram_url,
  youtube_url,
  twitter_url
) VALUES (
  1,
  'School Name',
  'Nurturing Minds, Building Futures',
  'CBSE',
  '0000000',
  '00000',
  2000,
  'Principal Name',
  'Director Name',
  '+91 00000 00000',
  '+91 00000 00000',
  '+91 00000 00000',
  'info@schoolname.com',
  'admissions@schoolname.com',
  'School Address, Area Name',
  'City',
  'State',
  '000000',
  '',
  false,
  '',
  '',
  '',
  '',
  '',
  ''
) ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- Default homepage_content sections
-- ============================================================

-- Stats section
INSERT INTO homepage_content (section_key, content, is_active) VALUES (
  'stats',
  '{
    "items": [
      { "label": "Years of Excellence", "value": 20, "icon": "trophy" },
      { "label": "Students Enrolled", "value": 2500, "icon": "users" },
      { "label": "Qualified Teachers", "value": 120, "icon": "graduation-cap" },
      { "label": "Achievements", "value": 500, "icon": "award" }
    ]
  }'::jsonb,
  true
) ON CONFLICT (section_key) DO NOTHING;

-- Why Choose Us section
INSERT INTO homepage_content (section_key, content, is_active) VALUES (
  'why_choose_us',
  '{
    "items": [
      { "icon": "book-open", "title": "Quality Education", "description": "Comprehensive curriculum aligned with CBSE standards for holistic development." },
      { "icon": "users", "title": "Small Class Size", "description": "Personalized attention with optimal student-teacher ratio for better learning." },
      { "icon": "award", "title": "Experienced Faculty", "description": "Highly qualified and experienced teachers dedicated to student success." },
      { "icon": "laptop", "title": "Smart Classrooms", "description": "Technology-enabled learning with interactive whiteboards and digital resources." },
      { "icon": "dribbble", "title": "Sports Facilities", "description": "State-of-the-art sports infrastructure for physical development and sportsmanship." },
      { "icon": "shield", "title": "Safe Environment", "description": "CCTV monitored campus with trained security for your child''s safety." }
    ]
  }'::jsonb,
  true
) ON CONFLICT (section_key) DO NOTHING;

-- Hero section
INSERT INTO homepage_content (section_key, content, is_active) VALUES (
  'hero',
  '{
    "heading": "Welcome to School Name",
    "subheading": "Nurturing Minds, Building Futures",
    "cta_primary": "Apply for Admission",
    "cta_secondary": "Download Prospectus",
    "background_image_url": "",
    "video_url": ""
  }'::jsonb,
  true
) ON CONFLICT (section_key) DO NOTHING;

-- Facilities section
INSERT INTO homepage_content (section_key, content, is_active) VALUES (
  'facilities',
  '{
    "items": [
      { "icon": "flask-conical", "title": "Science Laboratory", "description": "Well-equipped physics, chemistry, and biology labs for hands-on learning.", "image_url": "" },
      { "icon": "book-open", "title": "Library", "description": "Extensive collection of books, journals, and digital resources.", "image_url": "" },
      { "icon": "trophy", "title": "Sports Ground", "description": "Multi-sport ground with facilities for cricket, football, basketball, and athletics.", "image_url": "" },
      { "icon": "monitor", "title": "Smart Classrooms", "description": "Interactive digital classrooms with projectors and smart boards.", "image_url": "" },
      { "icon": "music", "title": "Auditorium", "description": "Multipurpose hall for events, assemblies, and cultural programs.", "image_url": "" },
      { "icon": "bus", "title": "Transport", "description": "Safe and reliable transport covering all major routes in the city.", "image_url": "" }
    ]
  }'::jsonb,
  true
) ON CONFLICT (section_key) DO NOTHING;

-- Principal's Message section
INSERT INTO homepage_content (section_key, content, is_active) VALUES (
  'principal_message',
  '{
    "name": "Principal Name",
    "designation": "Principal",
    "qualification": "M.Ed., B.Ed.",
    "photo_url": "",
    "message": "Welcome to our school. We are committed to providing a nurturing environment where every child can thrive academically, socially, and emotionally. Our dedicated team of educators works tirelessly to ensure that each student receives the attention and guidance they need to reach their full potential.",
    "quote": "Education is not the filling of a pail, but the lighting of a fire."
  }'::jsonb,
  true
) ON CONFLICT (section_key) DO NOTHING;

-- Director's Message section
INSERT INTO homepage_content (section_key, content, is_active) VALUES (
  'director_message',
  '{
    "name": "Director Name",
    "designation": "Director",
    "qualification": "MBA, B.Ed.",
    "photo_url": "",
    "message": "Our vision is to create a world-class educational institution that nurtures the next generation of leaders, thinkers, and innovators. We believe in providing an environment that fosters creativity, critical thinking, and moral values.",
    "vision": "To be the leading educational institution that shapes future leaders with strong values and global perspectives."
  }'::jsonb,
  true
) ON CONFLICT (section_key) DO NOTHING;
