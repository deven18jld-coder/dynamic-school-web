import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

export default function PrincipalPreview() {
  const principalData = {
    name: 'Dr. Sarah Johnson',
    role: 'Principal',
    message: 'At our school, we believe that education is not just about academic excellence but about nurturing the character and potential of every child.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
  };

  return (
    <section className="py-12 md:py-20 bg-neutral-50/50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl shadow-neutral-200/50 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center border border-neutral-100">
          {/* Photo on the Left */}
          <div className="w-full md:w-[35%] shrink-0">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <Image
                src={principalData.image}
                alt={principalData.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="mt-6 text-left">
              <h3 className="text-xl font-bold text-neutral-900 font-heading leading-tight">
                {principalData.name}
              </h3>
              <p className="text-sm text-neutral-500 font-medium tracking-wide">
                {principalData.role}
              </p>
            </div>
          </div>

          {/* Message on the Right */}
          <div className="flex-1 relative">
            <Quote className="h-10 w-10 text-primary mb-6 fill-primary/10" />
            
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-10 font-medium">
              {principalData.message}
            </p>

            <Link
              href="/about/principal-message"
              className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all group"
            >
              Read Full Message
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
