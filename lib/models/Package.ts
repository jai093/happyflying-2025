import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPackage extends Document {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  type: "Indian Tour" | "International Tour";
  category: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  description: string;
  itinerary: { day: string; details: string }[];
  inclusions: string[];
  exclusions: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PackageSchema = new Schema<IPackage>(
  {
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
  },
  { timestamps: true }
);

// Compound index for faster queries
PackageSchema.index({ type: 1, category: 1 });
PackageSchema.index({ createdAt: -1 });

const Package: Model<IPackage> =
  mongoose.models.Package ?? mongoose.model<IPackage>("Package", PackageSchema);

export default Package;
