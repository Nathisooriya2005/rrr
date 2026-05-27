"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Star, Filter, X } from "lucide-react"

const categories = [
  "All",
  "Necklaces",
  "Rings",
  "Earrings",
  "Bangles",
  "Bridal",
  "Pendants",
  "Gold",
]

const products = [
  {
    id: 1,
    name: "Royal Silver Necklace",
    price: "₹12,999",
    category: "Necklaces",
    rating: 5,
    image: "/images/hero-necklace.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Heritage Ring",
    price: "₹4,999",
    category: "Rings",
    rating: 5,
    image: "/images/ring.jpg",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Bridal Set",
    price: "₹28,999",
    category: "Bridal",
    rating: 5,
    image: "/images/bridal.jpg",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Elegant Earrings",
    price: "₹6,499",
    category: "Earrings",
    rating: 4,
    image: "/images/earrings.jpg",
    tag: "Trending",
  },
  {
    id: 5,
    name: "Silver Bangles Set",
    price: "₹8,999",
    category: "Bangles",
    rating: 5,
    image: "/images/bangles.jpg",
    tag: "Classic",
  },
  {
    id: 6,
    name: "Heritage Pendant",
    price: "₹5,499",
    category: "Pendants",
    rating: 5,
    image: "/images/pendant.jpg",
    tag: "Artisan",
  },
  {
    id: 7,
    name: "Gold Chain Necklace",
    price: "₹45,999",
    category: "Gold",
    rating: 5,
    image: "/images/gold-chain.jpg",
    tag: "Premium",
  },
  {
    id: 8,
    name: "Gold Bangle",
    price: "₹38,999",
    category: "Gold",
    rating: 5,
    image: "/images/gold-bangle.jpg",
    tag: "Exclusive",
  },
  {
    id: 9,
    name: "Pearl Earrings",
    price: "₹7,999",
    category: "Earrings",
    rating: 5,
    image: "/images/earrings.jpg",
    tag: "Elegant",
  },
  {
    id: 10,
    name: "Bridal Necklace Set",
    price: "₹35,999",
    category: "Bridal",
    rating: 5,
    image: "/images/bridal.jpg",
    tag: "Premium",
  },
  {
    id: 11,
    name: "Antique Bangles",
    price: "₹10,999",
    category: "Bangles",
    rating: 5,
    image: "/images/bangles.jpg",
    tag: "Vintage",
  },
  {
    id: 12,
    name: "Floral Pendant",
    price: "₹4,499",
    category: "Pendants",
    rating: 4,
    image: "/images/pendant.jpg",
    tag: "Delicate",
  },
]

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

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
            className="text-center"
          >
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Discover
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary mb-6">
              Our Collections
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our exquisite range of handcrafted 925 sterling silver
              jewellery, designed to complement every occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-6 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm tracking-wider uppercase transition-colors ${
                    activeCategory === category
                      ? "text-accent"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 text-sm tracking-wider uppercase text-muted-foreground"
            >
              <Filter className="h-4 w-4" />
              Filter by Category
            </button>

            {/* Results Count */}
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} Products
            </p>
          </div>

          {/* Mobile Filter Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mb-8 p-6 bg-background border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm tracking-wider uppercase text-primary">
                  Categories
                </span>
                <button onClick={() => setShowFilters(false)}>
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category)
                      setShowFilters(false)
                    }}
                    className={`px-4 py-2 text-sm tracking-wider border transition-colors ${
                      activeCategory === category
                        ? "border-accent text-accent"
                        : "border-border text-muted-foreground hover:border-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
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

      <Footer />
    </main>
  )
}
