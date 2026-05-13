/**
 * Placeholder school information.
 * In production, these values will be fetched from Supabase `school_settings` table.
 * No real school data — all values are placeholders for Phase 1.
 */

export const SCHOOL_INFO = {
  name: 'Sunrise Public School',
  tagline: 'Nurturing Minds, Building Futures',
  board: 'CBSE',
  affiliationNumber: 'XXXX/XXXX/XXXX',
  schoolCode: 'XXXXX',
  establishedYear: 2005,
  principalName: 'Dr. Principal Name',
  directorName: 'Mr. Director Name',
  phonePrimary: '+91 XXXXX XXXXX',
  phoneSecondary: '+91 XXXXX XXXXX',
  whatsappNumber: '91XXXXXXXXXX',
  emailPrimary: 'info@school.example.com',
  emailAdmissions: 'admissions@school.example.com',
  address: '123, School Road, Sector 10',
  city: 'City Name',
  state: 'State Name',
  pincode: '000000',
  googleMapsEmbedUrl: '',
  admissionOpen: true,
  logoUrl: '/logo.png',
  ogImageUrl: '/og-default.jpg',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
  youtube: 'https://youtube.com/',
  twitter: 'https://twitter.com/',
} as const;

/**
 * Navigation structure for the website.
 * Used by Navbar, MobileNav, and Footer components.
 */
export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'About Our School', href: '/about' },
      { label: "Principal's Message", href: '/principal-message' },
      { label: "Director's Message", href: '/director-message' },
    ],
  },
  { label: 'Academics', href: '/academics' },
  {
    label: 'Admission',
    children: [
      { label: 'Admission Open', href: '/admission' },
      { label: 'Admission Process', href: '/admission/process' },
      { label: 'Fee Structure', href: '/admission/fee-structure' },
    ],
  },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Campus Life',
    children: [
      { label: 'Results', href: '/results' },
      { label: 'Achievements', href: '/achievements' },
      { label: 'Events', href: '/events' },
      { label: 'News & Updates', href: '/news' },
      { label: 'Notice Board', href: '/notices' },
    ],
  },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Footer quick links.
 */
export const FOOTER_QUICK_LINKS = [
  { label: 'Admission', href: '/admission' },
  { label: 'Academics', href: '/academics' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Notice Board', href: '/notices' },
  { label: 'Results', href: '/results' },
] as const;

export const FOOTER_IMPORTANT_LINKS = [
  { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Careers', href: '/careers' },
  { label: 'Transport', href: '/transport' },
] as const;

/**
 * WhatsApp pre-filled message template.
 */
export const WHATSAPP_MESSAGE = `Hello, I am interested in admission at ${SCHOOL_INFO.name}. Please share details.`;

/**
 * Generate WhatsApp chat URL.
 */
export function getWhatsAppUrl(message?: string): string {
  const msg = encodeURIComponent(message ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${msg}`;
}
