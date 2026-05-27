"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
              Stay Connected
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary">
              Join Our Circle
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive exclusive offers, new collection previews, and
              the latest updates from RAVI HERITAGE.
            </p>
          </div>

          {/* Form */}
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:flex-1 px-6 py-4 bg-secondary border border-border text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 px-8 bg-secondary/50 border border-accent/50"
            >
              <p className="text-primary tracking-wide">
                Thank you for subscribing! We&apos;ll be in touch soon.
              </p>
            </motion.div>
          )}

          {/* Trust Text */}
          <p className="text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
