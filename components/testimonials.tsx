"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    text: "The craftsmanship of RAVI HERITAGE is truly exceptional. My bridal set was absolutely stunning and received countless compliments on my wedding day.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anita Patel",
    location: "Delhi, India",
    text: "I have been a loyal customer for years. The quality of their 925 silver jewellery is unmatched, and each piece tells a story of heritage and tradition.",
    rating: 5,
  },
  {
    id: 3,
    name: "Meera Reddy",
    location: "Bangalore, India",
    text: "From the moment I walked into their store, I felt the warmth of their service. The attention to detail in every piece is remarkable.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary">
            What Our Clients Say
          </h2>
          <div className="mt-6 w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative p-8 bg-secondary/50 border border-border h-full">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-accent/50 mb-6" />

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-auto">
                  <p className="text-primary font-medium tracking-wide">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    {testimonial.location}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-accent/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
