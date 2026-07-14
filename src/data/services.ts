import { ServiceItem, ServiceCategory } from "../types";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "hair", name: "Hair Couture", icon: "Scissors", emoji: "✂️" },
  { id: "skin", name: "Skin & Facial Wellness", icon: "Sparkles", emoji: "✨" },
  { id: "grooming", name: "Elite Grooming", icon: "Crown", emoji: "💎" },
  { id: "nails", name: "Manicure & Pedicure", icon: "Sparkles", emoji: "💅" },
  { id: "wedding", name: "Wedding & Events", icon: "Heart", emoji: "💍" }
];

export const SERVICES_DATA: ServiceItem[] = [
  // --- HAIR COUTURE ---
  {
    id: "hair-cut",
    category: "hair",
    name: "Couture Hair Cut",
    description: "Signature bespoke haircut styling designed around your face structure, hair texture, and refined aesthetic.",
    price: "Rs. 3,500",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    benefits: ["Face shape analysis", "Sleek blow-dry included", "Luxury scalp massage"]
  },
  {
    id: "hair-styling",
    category: "hair",
    name: "Luxury Styling & Blowout",
    description: "Modern, dynamic styling for elite parties, red carpet occurrences, and ultimate confidence boosts.",
    price: "Rs. 2,500",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    benefits: ["Anti-humidity gold spray", "Volume enhancement styling", "Flexible, long-lasting curls"]
  },
  {
    id: "hair-coloring",
    category: "hair",
    name: "Balayage & Premium Coloring",
    description: "Artisanal highlighting, root touch-up, or full transformation using premium ammonia-free gold standard dyes.",
    price: "Rs. 12,500",
    image: "https://images.unsplash.com/photo-1605497746444-ac9dbd39f4a5?auto=format&fit=crop&w=600&q=80",
    benefits: ["Custom tone matching", "Keratin color protection", "Luminous shine finish"]
  },
  {
    id: "hair-dye",
    category: "hair",
    name: "Professional Color Lock Dye",
    description: "Flawless grey coverage or custom deep gloss dye services with ultra-nourishing premium serums.",
    price: "Rs. 6,000",
    image: "https://images.unsplash.com/photo-1620331702289-448a6eb2a926?auto=format&fit=crop&w=600&q=80",
    benefits: ["Deep-nourishing root treatment", "Ammonia-free luxury formulas", "Rich dimensional luster"]
  },
  {
    id: "hair-shine-boost",
    category: "hair",
    name: "Lustrous Shine & Gloss Boost",
    description: "Revitalizing coat that instantly locks in mirror-like reflection, smooth touch, and high-end elegance.",
    price: "Rs. 4,500",
    image: "https://images.unsplash.com/photo-1595475243688-aa924f7943f7?auto=format&fit=crop&w=600&q=80",
    benefits: ["Instant cellular conditioning", "UV color shielding", "Anti-frizz action"]
  },
  {
    id: "hair-spa",
    category: "hair",
    name: "Elite Botanical Hair Spa",
    description: "Warm steam, therapeutic deep conditioning oils, and organic essential extracts for scalp rejuvenation.",
    price: "Rs. 5,000",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    benefits: ["Microcirculation head massage", "Hair follicle revival", "Stress relief therapy"]
  },
  {
    id: "keratin-treatment",
    category: "hair",
    name: "Royal Silk Keratin Treatment",
    description: "Professional amino acid reconstructive complex to seal split ends, eliminate frizz, and provide sleek glass hair.",
    price: "Rs. 18,000",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    benefits: ["Frizz-free for up to 5 months", "Saves blowout time", "Intense damage restoration"]
  },
  {
    id: "hair-treatment",
    category: "hair",
    name: "Olaplex Cellular Repair",
    description: "Advanced bond-building treatments to reverse extreme damage from bleach, heat styling, and dry weather.",
    price: "Rs. 8,500",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80",
    benefits: ["Multiplies broken bonds", "Restores elasticity & strength", "Protects future structures"]
  },
  {
    id: "bridal-hair",
    category: "hair",
    name: "Bridal Signature Styling",
    description: "Masterpiece updos, classic waves, or floral hair arrangements for Barat, Walima, and royal occasions.",
    price: "Rs. 10,000",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    benefits: ["Extended duration hold styling", "Tiara and dupatta settings", "Jewelry placement security"]
  },

  // --- SKIN & FACIAL WELLNESS ---
  {
    id: "thalgo-facial",
    category: "skin",
    name: "Thalgo Marine Hydration Facial",
    description: "Elite marine active skincare formulated with pure oceanic extracts to re-mineralize, oxygenate, and glow.",
    price: "Rs. 9,000",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
    benefits: ["Deep oceanic hydration", "Cellular detoxification", "Perfect oil balance", "Radiant complexion lift"]
  },
  {
    id: "janssen-facial",
    category: "skin",
    name: "Janssen Medical Brightening Facial",
    description: "German-engineered biological skincare designed to fade pigmentation, refine texture, and activate collagen.",
    price: "Rs. 8,000",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    benefits: ["Pigmentation defense", "Anti-aging cellular boost", "Intensive pore shrinkage", "Matte clean finish"]
  },
  {
    id: "dermalogica-facial",
    category: "skin",
    name: "Dermalogica Skin Resurfacing Facial",
    description: "Clinical-grade treatment targeting acne scars, dull tone, and aging utilizing high-performance dual-peels.",
    price: "Rs. 11,000",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
    benefits: ["Advanced chemical exfoliation", "Deep blackhead extraction", "Barrier defense enhancement"]
  },
  {
    id: "conatural-facial",
    category: "skin",
    name: "Conatural Organic Wellness Facial",
    description: "Pure botanical ingredients and organic oils designed for delicate skin types requiring gentle therapeutic touch.",
    price: "Rs. 7,000",
    image: "https://images.unsplash.com/photo-1527633593820-e323f42e06d9?auto=format&fit=crop&w=600&q=80",
    benefits: ["Soothes red, irritated skin", "Antioxidant deep purifiers", "Pure natural essence relaxation"]
  },
  {
    id: "skin-care-facial",
    category: "skin",
    name: "Signature Glow Skin Care Facial",
    description: "Classic multi-step maintenance facial to keep skin hydrated, firm, and fully defended from metropolitan dust.",
    price: "Rs. 5,500",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    benefits: ["Nourishing multi-vitamin application", "Relaxing lymph massage", "Instant hydration boost"]
  },
  {
    id: "cleansing",
    category: "skin",
    name: "Deep Cleansing Treatment",
    description: "Steam opening, ultrasonic vibration scaling, and premium pore vacuuming to eliminate deep oily sebum.",
    price: "Rs. 3,000",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    benefits: ["Zero pore-blocking dirt", "Prevents active breakouts", "Softens overall skin texture"]
  },
  {
    id: "exfoliation",
    category: "skin",
    name: "Diamond Microdermabrasion",
    description: "Gentle physical and chemical exfoliation method to remove dead cells and encourage natural skin cell division.",
    price: "Rs. 4,000",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=600&q=80",
    benefits: ["Unlocks fresh, smooth surface", "Assures deep product absorption", "Fades minor textural scars"]
  },
  {
    id: "face-mask",
    category: "skin",
    name: "Gold & Charcoal Facial Masks",
    description: "Dual-acting masks that infuse collagen while extracting heavy metal toxicity from city air.",
    price: "Rs. 2,000",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    benefits: ["Brightens overall complexion", "Tightens sagging cheek lines", "Calming properties"]
  },

  // --- ELITE GROOMING ---
  {
    id: "beard-trim",
    category: "grooming",
    name: "Master Artisan Beard Trim",
    description: "Precision razor framing, length blending, premium oil lubrication, and luxurious warm towel wrap.",
    price: "Rs. 1,500",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
    benefits: ["Symmetric outline shaping", "Sandalwood beard oil drop", "Hot towel stress relief"]
  },
  {
    id: "shave",
    category: "grooming",
    name: "Royal Sandalwood Shave",
    description: "Traditional straight-edge razor wet shave experience with pre-shave cream, luxury foam, and protective serum.",
    price: "Rs. 1,200",
    image: "https://images.unsplash.com/photo-1517832606589-7a5989d5af65?auto=format&fit=crop&w=600&q=80",
    benefits: ["Immaculate smooth close shave", "Alum block soothing touch", "Cold-compressed mint towel finish"]
  },
  {
    id: "touch-ups",
    category: "grooming",
    name: "Express Touch-Up Session",
    description: "Quick clean-up, hair styling fix, and shine powder before stepping into meetings or photo shoots.",
    price: "Rs. 1,800",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80",
    benefits: ["Completed in 15 minutes", "Matte face balancing", "Hair hold spray application"]
  },
  {
    id: "shampoo-wash",
    category: "grooming",
    name: "Tea Tree Revitalizing Shampoo",
    description: "Double head wash with high-grade tea tree shampoo to eliminate scalp itching and grease.",
    price: "Rs. 800",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    benefits: ["Removes built-up wax/gel", "Menthol cooling effect", "Acupressure head wash"]
  },
  {
    id: "deep-condition",
    category: "grooming",
    name: "Argan Oil Deep Conditioning",
    description: "Heavy conditioning therapy for damaged cuticles, locking in maximum shine and silkiness.",
    price: "Rs. 1,500",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    benefits: ["Softens coarse split hairs", "Restores vital hair oils", "Rich shine boost"]
  },

  // --- MANICURE & PEDICURE ---
  {
    id: "whitening-mani",
    category: "nails",
    name: "Royal Whitening Manicure",
    description: "Premium nail shaping, cuticle push, multi-vitamin whitening wash, hand scrub, and warm gold mask.",
    price: "Rs. 3,500",
    image: "https://images.unsplash.com/photo-1604654894610-df49068873ae?auto=format&fit=crop&w=600&q=80",
    benefits: ["Brightens hand skin tone", "Relieves wrist tension", "High-gloss buffing finish"]
  },
  {
    id: "whitening-pedi",
    category: "nails",
    name: "Royal Whitening Pedicure",
    description: "Relaxing warm water mineral tub, heel scraping, salt scrub, skin whitening pack, and reflexology massage.",
    price: "Rs. 4,500",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=600&q=80",
    benefits: ["Deep heel crack restoration", "Calf muscle drainage massage", "Fungus & dirt sterilization"]
  },
  {
    id: "full-hands-polish",
    category: "nails",
    name: "Luminous Hands Gold Polish",
    description: "Intensive safe chemical-free bleaching polisher targeting sunburns and dark knuckles.",
    price: "Rs. 2,000",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    benefits: ["Evens out tone variance", "Nourishing oil barrier", "Radiant silky skin feel"]
  },
  {
    id: "neck-polish",
    category: "nails",
    name: "Revitalizing Neck Polish",
    description: "Specialized neck treatment to remove hyperpigmentation, fine lines, and collar collar discoloration.",
    price: "Rs. 1,500",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    benefits: ["Smoothes neck lines", "Instantly lightens tone", "Soothing cool cucumber mask"]
  },

  // --- WEDDING & EVENTS ---
  {
    id: "wedding-day-pkg",
    category: "wedding",
    name: "Wedding Day Groom Package",
    description: "The gold-standard package for grooms seeking to stand out with pristine skin, majestic hair, and unmatched poise.",
    price: "Rs. 4,500",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    benefits: ["Deep cleansing facial rub", "Sleek event hairstyle setting", "Precision shave/trim framing"]
  },
  {
    id: "bridal-styling-complete",
    category: "wedding",
    name: "Bridal & Groom Styling",
    description: "High-end collaborative VIP beauty and hair design packages for grooms, brides, and family delegations.",
    price: "Rs. 25,000",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    benefits: ["Pre-wedding consultative setup", "Champagne / premium mocktails", "VIP private suite room access"]
  }
];
