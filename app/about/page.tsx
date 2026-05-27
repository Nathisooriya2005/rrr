"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Gem, Heart, Award, Users } from "lucide-react"

const stats = [
  { number: "25+", label: "Years of Excellence" },
  { number: "10K+", label: "Happy Customers" },
  { number: "5000+", label: "Unique Designs" },
  { number: "100%", label: "Pure 925 Silver" },
]

const values = [
  {
    icon: Gem,
    title: "Purity & Quality",
    description:
      "Every piece is crafted from certified 925 sterling silver, ensuring the highest standards of purity and lasting brilliance.",
  },
  {
    icon: Heart,
    title: "Passion for Craft",
    description:
      "Our artisans pour their heart and soul into every design, creating pieces that carry stories of love and dedication.",
  },
  {
    icon: Award,
    title: "Heritage & Tradition",
    description:
      "We honor centuries-old craftsmanship techniques, blending traditional artistry with contemporary elegance.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We build lasting relationships through exceptional service and quality.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Our Story
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary mb-8">
              A Legacy of
              <span className="block italic text-muted-foreground">
                Craftsmanship
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over two decades, RAVI HERITAGE has been dedicated to creating
              exquisite handcrafted 925 sterling silver jewellery that celebrates
              the timeless beauty of Indian craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/bridal.jpg"
                  alt="RAVI HERITAGE Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-accent/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">
                  The Beginning
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
                  Our Heritage
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  RAVI HERITAGE was born from a passion to preserve and celebrate
                  the rich tradition of Indian silver craftsmanship. What started
                  as a small family workshop has grown into a beloved brand,
                  trusted by thousands of customers across the country.
                </p>
                <p>
                  Our founder&apos;s vision was simple yet profound: to create jewellery
                  that tells a story, pieces that become treasured heirlooms passed
                  down through generations. Every design we create honors this
                  vision, blending traditional techniques with contemporary
                  aesthetics.
                </p>
                <p>
                  Today, our team of skilled artisans continues this legacy,
                  meticulously handcrafting each piece with the same dedication
                  and attention to detail that has defined RAVI HERITAGE from the
                  very beginning.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-light text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-sm tracking-wider text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-primary">
              Our Values
            </h2>
            <div className="mt-6 w-24 h-px bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-background/50 border border-border"
              >
                <value.icon className="h-10 w-10 text-accent mb-6" />
                <h3 className="text-xl font-medium text-primary tracking-wide mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div>
                <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">
                  The Art of Creation
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
                  Our Craftsmanship
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Each piece of RAVI HERITAGE jewellery undergoes a meticulous
                  creation process. From initial design sketches to the final
                  polish, our artisans dedicate hours of focused work to ensure
                  perfection.
                </p>
                <p>
                  We use only certified 925 sterling silver, carefully sourced and
                  tested for purity. Our traditional handcrafting techniques,
                  passed down through generations, ensure that every detail is
                  precisely executed.
                </p>
                <p>
                  The result is jewellery that not only looks stunning but also
                  stands the test of time, becoming cherished possessions that
                  carry stories and memories.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/pendant.jpg"
                  alt="Handcrafted Silver Jewellery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-accent/30" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
