import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
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
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1c] to-black" />
      <div className="fixed inset-0 -z-20 bg-grid-pattern opacity-[0.25]" />
      <InteractiveBackground />
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
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {/* Venue */}
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl bg-card border border-border p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-foreground">Event Venue</h3>
                      <p className="text-xs text-muted-foreground">Shivajirao S. Jondhale College of Engineering, Dombivli (E)</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-muted border border-border h-48 flex items-center justify-center">
                    <a
                      href="https://maps.google.com/?q=Shivajirao+S+Jondhale+College+of+Engineering+Dombivli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Form */}
              <AnimatedSection delay={0.2}>
                <div className="rounded-2xl bg-card border border-border p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Send className="w-5 h-5 text-primary" />
                    <h3 className="font-space font-bold text-foreground">Send us a Message</h3>
                  </div>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-foreground font-medium mb-1.5 block">Name *</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-foreground font-medium mb-1.5 block">Email *</label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-foreground font-medium mb-1.5 block">Query Type *</label>
                      <select
                        className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
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
                      <label className="text-xs text-foreground font-medium mb-1.5 block">Message *</label>
                      <textarea
                        placeholder="How can we help you?"
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_20px_hsl(190_100%_50%/0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={14} />
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Committee */}
            <AnimatedSection delay={0.3}>
              <div className="max-w-2xl mx-auto mb-20">
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-space font-bold text-lg text-foreground">Organizing Committee</h3>
                </div>
                <div className="space-y-3">
                  {committee.map((person) => (
                    <div key={person.name} className="rounded-xl bg-card border border-border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-0.5">{person.role}</p>
                        <p className="font-medium text-foreground">{person.name}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Mail size={12} /> {person.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Phone size={12} /> {person.phone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* FAQ */}
            <AnimatedSection delay={0.4}>
              <div id="faq" className="max-w-2xl mx-auto">
                <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
                  Frequently Asked <span className="text-primary text-glow-cyan">Questions</span>
                </h2>
                <p className="text-muted-foreground text-center mb-10">Everything you need to know</p>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5 text-sm md:text-base">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm pb-5">
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
