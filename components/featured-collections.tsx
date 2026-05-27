"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const collections = [
  {
    name: "Silver Necklaces",
    image: "/images/hero-necklace.jpg",
    count: "24 Products",
  },
  {
    name: "Elegant Rings",
    image: "/images/ring.jpg",
    count: "18 Products",
  },
  {
    name: "Bridal Collection",
    image: "/images/bridal.jpg",
    count: "32 Products",
  },
  {
    name: "Silver Earrings",
    image: "/images/earrings.jpg",
    count: "28 Products",
  },
  {
    name: "Silver Bangles",
    image: "/images/bangles.jpg",
    count: "15 Products",
  },
  {
    name: "Heritage Pendants",
    image: "/images/pendant.jpg",
    count: "21 Products",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function FeaturedCollections() {
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
            Explore
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary">
            Our Collections
          </h2>
          <div className="mt-6 w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {collections.map((collection) => (
            <motion.div key={collection.name} variants={itemVariants}>
              <Link href="/collections" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                  
                  {/* Glassmorphism Card */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-background/60 backdrop-blur-md border border-border/50 p-6">
                      <h3 className="text-xl font-medium text-primary tracking-wide">
                        {collection.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 tracking-wide">
                        {collection.count}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 px-10 py-4 border border-border text-primary text-sm tracking-[0.2em] uppercase hover:bg-secondary transition-all duration-300"
          >
            View All Collections
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
