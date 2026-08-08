#!/usr/bin/env node
/**
 * Seed Script: Populate MongoDB with initial package data
 * Usage: node scripts/seed-packages.js
 * 
 * This script reads from data/travel.ts and populates the MongoDB packages collection
 * with all tour packages for the admin dashboard to use.
 */

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

// Import package data
// Note: We need to require the compiled JavaScript version
// For now, we'll define it inline to avoid TypeScript issues

const PACKAGES = [
  {
    "slug": "chandigarh-kullu-manali-happyflying",
    "title": "Chandigarh Kullu - Manali-happyflying",
    "location": "Chandigarh, Kullu, Manali",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1585,
    "image": "/assets/images/uttarkhand1.jpeg",
    "tags": ["Heritage & Nature", "6 Days", "Indian Tour"],
    "description": "Experience the magical Himalayas with a journey through Chandigarh, Kullu and Manali.",
    "itinerary": [
      ["Day 1 - Chandigarh to Shimla", "Arrive at Chandigarh airport/railway station. Proceed to Shimla. Check-in the hotel and relax for the day. Enjoy the delicious dinner from the hotel."],
      ["Day 2 - Shimla Sightseeing", "After breakfast, sightseeing of places in and around Shimla. Kufri is famous for its Himalayan National Park, Poney and Yak Ride. Visit Mall road in the evening."],
      ["Day 3 - Shimla to Manali via Kullu", "After breakfast & check out, depart to Manali. Enroute to Kullu visit Shawl factory & enjoy River Rafting. Proceed to Manali and check into the hotel."],
      ["Day 4 - Manali Sightseeing", "After breakfast, visit sightseeing places: Hadimba Temple, Club House, Vashisht Bath, Van Vihar, and Tibetan Monastery. Return to hotel for overnight stay."],
      ["Day 5 - Solang Valley Sightseeing", "After breakfast, visit Solang Valley. Enjoy adventure activities like Skiing, Snow Biking, Pony Ride, Paragliding, Zorbing. Proceed to Shimla for overnight stay."],
      ["Day 6 - Shimla to Chandigarh Departure", "After breakfast, check-out from the hotel, proceed to Chandigarh. Reach Chandigarh and get direct drop to Airport/Railway Station."]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "exquisite-rajasthan-5-nights-and-6-days",
    "title": "Exquisite Rajasthan – 5 Nights and 6 Days",
    "location": "Rajasthan",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.8,
    "reviews": 1855,
    "image": "/assets/images/majestic-tour-rajasthan.jpg",
    "tags": ["Heritage & Culture", "6 Days", "Indian Tour"],
    "description": "Discover the royal heritage and vibrant culture of Rajasthan with visits to iconic forts and palaces.",
    "itinerary": [
      ["Day 1 - Arrival in Jaipur", "Arrive at Jaipur airport/railway station. Check-in at hotel. Rest and relax. In the evening, explore the local markets. Overnight at Jaipur."],
      ["Day 2 - Jaipur Sightseeing", "Visit City Palace, Jantar Mantar, and Hawa Mahal. Explore the Pink City's bazaars. Overnight at Jaipur."],
      ["Day 3 - Jaipur to Jodhpur", "Drive to Jodhpur (approximately 345 km). Visit Mehrangarh Fort and Jaswant Thada. Overnight at Jodhpur."],
      ["Day 4 - Jodhpur to Jaisalmer", "Drive to Jaisalmer (approximately 240 km). Visit the Golden Fort and havelis. Overnight at Jaisalmer."],
      ["Day 5 - Jaisalmer Desert Safari", "Experience desert safari with camel rides. Visit sand dunes. Traditional Rajasthani dinner. Overnight at Jaisalmer."],
      ["Day 6 - Jaisalmer to Jaipur Departure", "Drive back to Jaipur. Drop at airport/railway station for departure."]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Sightseeing as per itinerary"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kerala-houseboat",
    "title": "Kerala HouseBoat",
    "location": "Kerala",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 4.9,
    "reviews": 688,
    "image": "/assets/images/kerala-houseboat.jpeg",
    "tags": ["Beach & Backwaters", "3 Days", "Indian Tour"],
    "description": "Experience the serene backwaters of Kerala on a traditional houseboat with authentic cuisine and scenic views.",
    "itinerary": [
      ["Day 1 - Arrival in Kochi", "Arrive at Kochi. Check-in at hotel. Rest and relax. Evening free to explore local markets. Overnight at Kochi."],
      ["Day 2 - Houseboat Backwater Cruise", "Embark on houseboat cruise through Kerala backwaters. Experience authentic village life. Traditional lunch on boat. Sunset cruise. Overnight on houseboat."],
      ["Day 3 - Morning Cruise & Departure", "Early morning cruise through backwaters. Visit spice plantations. Check-out from houseboat. Drop to airport/railway station."]
    ],
    "inclusions": [
      "Accommodation on Houseboat",
      "Daily Meals",
      "Backwater Cruise",
      "All Transfers"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Expenses",
      "Adventure Activities"
    ]
  },
  {
    "slug": "maldives-tropical-paradise",
    "title": "Maldives Tropical Paradise",
    "location": "Maldives",
    "duration": "5 Days / 4 Nights",
    "price": "₹45,900 / person",
    "type": "International Tour",
    "category": "Beach & Water Sports",
    "rating": 5.0,
    "reviews": 542,
    "image": "/assets/images/maldives.jpg",
    "tags": ["Beach & Water Sports", "5 Days", "International Tour"],
    "description": "Escape to the tropical paradise of Maldives with crystal-clear waters, white sandy beaches, and luxury resorts.",
    "itinerary": [
      ["Day 1 - Arrival in Maldives", "Arrive at Male International Airport. Speed boat transfer to resort. Check-in and relax. Evening sunset cruise. Overnight at resort."],
      ["Day 2 - Water Sports & Beach", "Morning snorkeling. Lunch on beach. Afternoon water sports activities. Evening spa session. Overnight at resort."],
      ["Day 3 - Island Hopping", "Full day island hopping tour. Visit local fishing villages. Sunset dolphin cruise. Overnight at resort."],
      ["Day 4 - Diving & Water Activities", "Morning scuba diving. Afternoon at leisure. Evening dinner on beach. Overnight at resort."],
      ["Day 5 - Departure", "Breakfast. Check-out from resort. Speed boat transfer to airport for departure."]
    ],
    "inclusions": [
      "4-Star Resort Stay",
      "All Meals",
      "Airport Transfers",
      "Water Sports Activities"
    ],
    "exclusions": [
      "International Flights",
      "Visa Fees",
      "Travel Insurance"
    ]
  }
];

// MongoDB Package Schema
const PackageSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, trim: true, index: true },
  title: { type: String, required: true, trim: true, index: true },
  location: { type: String, required: true, index: true },
  duration: { type: String, required: true },
  price: { type: String, required: true },
  type: {
    type: String,
    enum: ["Indian Tour", "International Tour"],
    required: true,
    index: true,
  },
  category: { type: String, required: true, index: true },
  rating: { type: Number, default: 4.8, min: 0, max: 5 },
  reviews: { type: Number, default: 0 },
  image: { type: String, required: true },
  tags: [{ type: String }],
  description: { type: String, required: true },
  itinerary: [
    {
      day: { type: String, required: true },
      details: { type: String, required: true },
    },
  ],
  inclusions: [{ type: String }],
  exclusions: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

PackageSchema.index({ type: 1, category: 1 });
PackageSchema.index({ createdAt: -1 });

const Package = mongoose.model('Package', PackageSchema);

async function seedPackages() {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/happyflying";
    
    console.log('📦 Connecting to MongoDB...');
    console.log(`   URI: ${mongoUri.replace(/:[^:@]*@/, ':***@')}`);
    
    await mongoose.connect(mongoUri, {
      bufferCommands: false,
    });
    
    console.log('✅ Connected to MongoDB\n');

    // Convert itinerary format from [day, details] to { day, details }
    const packagesToInsert = PACKAGES.map(pkg => ({
      ...pkg,
      itinerary: pkg.itinerary.map(([day, details]) => ({ day, details }))
    }));

    // Clear existing packages
    const deleted = await Package.deleteMany({});
    console.log(`🗑️  Removed ${deleted.deletedCount} existing packages\n`);

    // Insert new packages
    const result = await Package.insertMany(packagesToInsert);
    
    console.log(`✅ Successfully seeded ${result.length} packages:\n`);
    result.forEach(pkg => {
      console.log(`   • ${pkg.title}`);
      console.log(`     Location: ${pkg.location}`);
      console.log(`     Type: ${pkg.type}`);
      console.log(`     Price: ${pkg.price}`);
      console.log(`     Duration: ${pkg.duration}\n`);
    });

    console.log('✅ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    console.error(error);
    process.exit(1);
  }
}

seedPackages();
