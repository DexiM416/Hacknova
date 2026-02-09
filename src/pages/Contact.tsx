import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CosmicEffects from "@/components/CosmicEffects";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Mail, Phone, Send, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const committee = [
  { role: "Faculty Coordinator", name: "Prof. Rajesh Kumar", email: "rajesh.kumar@ssjcoe.edu.in", phone: "+91 98765 43210" },
  { role: "Student Lead", name: "Ankit Sharma", email: "ankit.hacknova@ssjcoe.edu.in", phone: "+91 87654 32109" },
  { role: "Technical Lead", name: "Priya Singh", email: "priya.hacknova@ssjcoe.edu.in", phone: "+91 76543 21098" },
];

const faqs = [
  { q: "Who can participate?", a: "HACKNOVA is open to all students across India. You need a valid college ID to participate." },
  { q: "What is the team size?", a: "Teams must have 2 to 4 members. Solo participation is not allowed." },
  { q: "Is there a registration fee?", a: "Registration details and fees are available on the Unstop platform." },
  { q: "Are there predefined problem statements?", a: "No. Teams identify their own real-world problems and build original solutions within the chosen track." },
  { q: "What is the hackathon format?", a: "It's a hybrid event: online submissions first, then the top 30 shortlisted teams compete in a 12-hour on-campus hackathon at SSJCOE." },
  { q: "What should I submit in the online round?", a: "An idea abstract, PPT presentation, and optionally a prototype/demo link before the deadline (28 Feb)." },
  { q: "How are winners selected?", a: "Judging is based on Innovation, Feasibility, Relevance, and Execution. Winners are selected per track with optional cross-track jury prizes." },
  { q: "Can cross-college teams participate?", a: "Yes! Cross-college teams are allowed and encouraged. Build your dream team from any institution across India." },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", type: "", message: "" });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Background Layers */}
      {/* Fixed Background Layers - Removed to match Home Page */}

      <CosmicEffects />
      <Navbar />
      <main className="relative z-10 pt-[72px]">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h1 className="font-space text-4xl md:text-5xl font-bold text-center mb-4">
                Get in <span className="text-primary text-glow-cyan">Touch</span>
              </h1>
              <p className="text-muted-foreground text-center mb-16">Have questions? We're here to help.</p>
            </AnimatedSection>

            {/* Venue + Form */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {/* Venue */}
              <AnimatedSection delay={0.1}>
                <div className="group relative h-full bg-card/40 backdrop-blur-md border border-white/10 p-1 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-black/40 rounded-xl p-8 h-full flex flex-col relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold text-foreground text-lg">Event Venue</h3>
                        <p className="text-xs text-muted-foreground font-mono">Shivajirao S. Jondhale College of Engineering</p>
                      </div>
                    </div>
                    <div className="rounded-xl bg-muted/50 border border-white/10 h-64 overflow-hidden relative isolate">
                      <iframe
                        title="Shivajirao S. Jondhale College of Engineering Location"
                        className="w-full h-full filter grayscale contrast-[1.2] invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                        src="https://maps.google.com/maps?q=Shivajirao+S.+Jondhale+College+of+Engineering,+Dombivli+East,+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Form */}
              <AnimatedSection delay={0.2}>
                <div className="group relative bg-card/40 backdrop-blur-md border border-white/10 p-1 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-black/40 rounded-xl p-8 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Send className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-orbitron font-bold text-foreground text-lg">Send us a Message</h3>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-foreground font-medium mb-1.5 block font-mono">Name *</label>
                          <input
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/80 focus:outline-none transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-xs text-foreground font-medium mb-1.5 block font-mono">Email *</label>
                          <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/80 focus:outline-none transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-foreground font-medium mb-1.5 block font-mono">Query Type *</label>
                        <select
                          className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-sm text-foreground focus:border-primary/50 focus:bg-black/80 focus:outline-none transition-all"
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        >
                          <option value="">Select a topic</option>
                          <option value="registration">Registration</option>
                          <option value="tracks">Tracks & Problems</option>
                          <option value="prizes">Prizes</option>
                          <option value="venue">Venue & Logistics</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-foreground font-medium mb-1.5 block font-mono">Message *</label>
                        <textarea
                          placeholder="How can we help you?"
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/80 focus:outline-none transition-all resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-lg bg-primary text-black font-bold font-orbitron uppercase tracking-wide hover:bg-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Send Message <Send size={16} />
                      </button>
                    </form>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Committee */}
            <AnimatedSection delay={0.3}>
              <div className="max-w-2xl mx-auto mb-20">
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="font-orbitron font-bold text-xl text-foreground">Organizing Committee</h3>
                </div>
                <div className="space-y-4">
                  {committee.map((person) => (
                    <div key={person.name} className="group relative bg-card/40 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-primary/30 transition-all duration-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-1">{person.role}</p>
                        <p className="font-space font-bold text-lg text-foreground">{person.name}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          <Mail size={12} className="text-primary" /> {person.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          <Phone size={12} className="text-primary" /> {person.phone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* FAQ */}
            <AnimatedSection delay={0.4}>
              <div id="faq" className="max-w-3xl mx-auto">
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4">
                  Frequently Asked <span className="text-primary text-glow-cyan">Questions</span>
                </h2>
                <p className="text-muted-foreground text-center mb-10">Everything you need to know</p>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="rounded-xl border border-white/10 bg-card/40 backdrop-blur-md px-6 hover:border-primary/30 transition-colors data-[state=open]:border-primary/50 data-[state=open]:bg-card/60"
                    >
                      <AccordionTrigger className="text-left font-space font-medium text-foreground hover:text-primary py-5 text-sm md:text-lg">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base pb-6 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
