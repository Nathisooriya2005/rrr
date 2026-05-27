"use client"

import { motion } from "framer-motion"
import { Shield, Gem, Award, Truck } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "925 Sterling Silver",
    description:
      "Every piece is crafted from certified 925 sterling silver, ensuring lasting quality and brilliance.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description:
      "We stand behind our craftsmanship with a lifetime warranty on all our jewellery pieces.",
  },
  {
    icon: Award,
    title: "Handcrafted Excellence",
    description:
      "Each piece is meticulously handcrafted by skilled artisans preserving traditional techniques.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Enjoy complimentary shipping on all orders, delivered safely to your doorstep.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
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
            The RAVI HERITAGE Promise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary">
            Why Choose Us
          </h2>
          <div className="mt-6 w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto mb-6 border border-border flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>

              <h3 className="text-lg font-medium text-primary tracking-wide mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
