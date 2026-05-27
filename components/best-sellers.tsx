"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Royal Silver Necklace",
    price: "₹12,999",
    rating: 5,
    image: "/images/hero-necklace.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Heritage Ring",
    price: "₹4,999",
    rating: 5,
    image: "/images/ring.jpg",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Bridal Set",
    price: "₹28,999",
    rating: 5,
    image: "/images/bridal.jpg",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Elegant Earrings",
    price: "₹6,499",
    rating: 4,
    image: "/images/earrings.jpg",
    tag: "Trending",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function BestSellers() {
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
            Curated Selection
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary">
            Best Sellers
          </h2>
          <div className="mt-6 w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <div className="group">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-secondary mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs tracking-wider uppercase">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < product.rating
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>

                  <h3 className="text-lg font-medium text-primary tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground tracking-wide">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
