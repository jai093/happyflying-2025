import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  email: string;
  mobile: string;
  source: "homepage_popup" | "contact_page";
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    name: { type: String, required: true, trim: true, index: true },
    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    mobile: { type: String, required: true, trim: true, index: true },
    source: {
      type: String,
      enum: ["homepage_popup", "contact_page"],
      default: "homepage_popup",
      index: true,
    },
  },
  { timestamps: true }
);

// Compound index for faster queries
EnquirySchema.index({ createdAt: -1 });
EnquirySchema.index({ source: 1, createdAt: -1 });

// TTL index to auto-delete old records after 90 days (optional)
EnquirySchema.index({ createdAt: 1 }, { expireAfterSeconds: 7776000 });

const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry ?? mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

export default Enquiry;
