import Link from 'next/link';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import {
  SCHOOL_INFO,
  SOCIAL_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_IMPORTANT_LINKS,
} from '@/lib/constants';

// Brand Icons as custom components because lucide-react 1.x does not include them
const Facebook = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 64.6 64.6 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 64.6 64.6 0 0 1-15 0 2 2 0 0 1-2-2Z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Twitter = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: School Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base font-bold font-heading text-white leading-tight">
                  {SCHOOL_INFO.name}
                </p>
                <p className="text-xs text-neutral-400 leading-tight">
                  {SCHOOL_INFO.board} Affiliated
                </p>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 mb-4 max-w-xs">
              {SCHOOL_INFO.tagline}. Providing quality education since{' '}
              {SCHOOL_INFO.establishedYear}.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
                { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
                { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube' },
                { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold font-heading text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="text-sm font-semibold font-heading text-white uppercase tracking-wider mb-4">
              Important Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_IMPORTANT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold font-heading text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span className="text-sm">
                  {SCHOOL_INFO.address}, {SCHOOL_INFO.city},{' '}
                  {SCHOOL_INFO.state} - {SCHOOL_INFO.pincode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${SCHOOL_INFO.phonePrimary.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {SCHOOL_INFO.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SCHOOL_INFO.emailPrimary}`}
                  className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {SCHOOL_INFO.emailPrimary}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-neutral-500">
            <p>
              © {currentYear} {SCHOOL_INFO.name}. All rights reserved.
            </p>
            <p>{SCHOOL_INFO.board} Affiliation No: {SCHOOL_INFO.affiliationNumber}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
