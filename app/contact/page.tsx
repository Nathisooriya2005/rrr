"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Store",
    details: ["123 Heritage Lane", "Jewellery District", "Mumbai, Maharashtra 400001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 22 1234 5678"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@raviheritage.com", "support@raviheritage.com"],
  },
  {
    icon: Clock,
    title: "Store Hours",
    details: ["Monday - Saturday: 10am - 8pm", "Sunday: 11am - 6pm"],
  },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              We&apos;d love to hear from you. Visit our store, call us, or send a
              message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-background border border-border text-center"
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-accent/50 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-primary tracking-wide mb-4">
                  {item.title}
                </h3>
                {item.details.map((detail) => (
                  <p key={detail} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10">
                <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">
                  Send a Message
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-primary">
                  We&apos;re Here to Help
                </h2>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-muted-foreground mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-muted-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm text-muted-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm text-muted-foreground mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border text-primary focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Status</option>
                        <option value="custom">Custom Order</option>
                        <option value="wholesale">Wholesale</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border border-border text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-accent transition-all duration-300"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-8 bg-secondary/50 border border-accent/50 text-center"
                >
                  <h3 className="text-2xl font-light text-primary mb-4">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="aspect-square lg:aspect-[4/3] bg-secondary border border-border relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8559786382195!2d72.82790237426877!3d18.93619985654867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0xc70a25a7209c733c!2sZaveri%20Bazaar!5e0!3m2!1sen!2sin!4v1702847892381!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RAVI HERITAGE Store Location"
                />
              </div>

              {/* Social Links */}
              <div className="p-8 bg-secondary/50 border border-border">
                <h3 className="text-lg font-medium text-primary tracking-wide mb-6">
                  Follow Us
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stay connected with us on social media for the latest collections,
                  behind-the-scenes content, and exclusive offers.
                </p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-accent transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
