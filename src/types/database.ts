export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      school_settings: {
        Row: {
          id: number
          school_name: string | null
          tagline: string | null
          board_affiliation: string | null
          affiliation_number: string | null
          school_code: string | null
          established_year: number | null
          principal_name: string | null
          director_name: string | null
          phone_primary: string | null
          phone_secondary: string | null
          whatsapp_number: string | null
          email_primary: string | null
          email_admissions: string | null
          address: string | null
          city: string | null
          state: string | null
          pincode: string | null
          google_maps_embed_url: string | null
          admission_open: boolean
          logo_url: string | null
          og_image_url: string | null
          facebook_url: string | null
          instagram_url: string | null
          youtube_url: string | null
          twitter_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          school_name?: string | null
          tagline?: string | null
          board_affiliation?: string | null
          affiliation_number?: string | null
          school_code?: string | null
          established_year?: number | null
          principal_name?: string | null
          director_name?: string | null
          phone_primary?: string | null
          phone_secondary?: string | null
          whatsapp_number?: string | null
          email_primary?: string | null
          email_admissions?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          pincode?: string | null
          google_maps_embed_url?: string | null
          admission_open?: boolean
          logo_url?: string | null
          og_image_url?: string | null
          facebook_url?: string | null
          instagram_url?: string | null
          youtube_url?: string | null
          twitter_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          school_name?: string | null
          tagline?: string | null
          board_affiliation?: string | null
          affiliation_number?: string | null
          school_code?: string | null
          established_year?: number | null
          principal_name?: string | null
          director_name?: string | null
          phone_primary?: string | null
          phone_secondary?: string | null
          whatsapp_number?: string | null
          email_primary?: string | null
          email_admissions?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          pincode?: string | null
          google_maps_embed_url?: string | null
          admission_open?: boolean
          logo_url?: string | null
          og_image_url?: string | null
          facebook_url?: string | null
          instagram_url?: string | null
          youtube_url?: string | null
          twitter_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      notices: {
        Row: {
          id: string
          title: string
          category: string
          content: string | null
          date: string
          attachment_url: string | null
          is_published: boolean
          is_urgent: boolean
          created_at: string
          updated_at: string
        }
      }
      enquiries: {
        Row: {
          id: string
          parent_name: string
          student_name: string
          applying_for_class: string
          phone_number: string
          email: string | null
          city: string | null
          message: string | null
          status: string
          created_at: string
        }
      }
    }
  }
}
