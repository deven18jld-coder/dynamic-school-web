'use client';

import { User, Phone, Mail, GraduationCap, Send } from 'lucide-react';

export default function EnquiryFormInline() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Left: Content */}
          <div className="lg:w-1/2 p-6 md:p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                Start Your Child's Journey with Us
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-md">
                Have questions about our admission process, fees, or curriculum? Fill out the form, and our admissions team will contact you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Call Admissions</p>
                    <p className="font-bold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Email Us</p>
                    <p className="font-bold">admissions@school.edu.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-1/2 p-6 md:p-10 lg:p-12 bg-neutral-50">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Parent Name"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input
                  type="email"
                  placeholder="Email Address (Optional)"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                />
              </div>

              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <select className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none">
                  <option value="">Select Class Applying For</option>
                  <option value="pre-nursery">Pre-Nursery</option>
                  <option value="nursery">Nursery</option>
                  <option value="class-1">Class 1</option>
                  <option value="class-2-5">Class 2 - 5</option>
                  <option value="class-6-9">Class 6 - 9</option>
                  <option value="class-11">Class 11</option>
                </select>
              </div>

              <textarea
                placeholder="Your Message / Questions"
                rows={3}
                className="w-full px-4 py-3.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold transition-all hover:bg-primary-dark shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
              >
                Submit Enquiry
                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-[10px] text-neutral-400 text-center mt-4">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
