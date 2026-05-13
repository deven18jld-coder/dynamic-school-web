export default function MapSection() {
  // Replace with the school's actual coordinates or address
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9051877405!2d77.2273183!3d28.6324293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3132649319%3A0x9d4905151590e8f!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1715569420456!5m2!1sen!2sin";

  return (
    <section className="h-[400px] md:h-[500px] w-full relative">
      {/* Overlay for aesthetic blending (optional) */}
      <div className="absolute inset-0 bg-neutral-900/5 pointer-events-none z-10" />
      
      {/* Google Maps Iframe with Lazy Loading */}
      <iframe
        src={googleMapsUrl}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="School Location Map"
      ></iframe>
      
      {/* Floating Address Card (Optional, for better UX) */}
      <div className="absolute top-8 left-4 md:left-12 z-20 hidden md:block">
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 max-w-xs">
          <h3 className="font-bold font-heading text-neutral-900 mb-2">Visit Us</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            123 Education Lane, Knowledge Park,<br />
            New Delhi, Delhi - 110001
          </p>
          <hr className="my-4 border-neutral-100" />
          <p className="text-xs text-neutral-400 font-medium">
            Monday - Friday: 8:00 AM - 4:00 PM<br />
            Saturday: 8:00 AM - 1:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}
