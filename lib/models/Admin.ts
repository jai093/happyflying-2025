import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAdmin extends Document {
  username: string;
  passwordHash: string;
  email?: string;
  name?: string;
  profileImage?: string;
  role: "super_admin" | "admin";
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    email: { type: String, trim: true, sparse: true },
    name: { type: String, trim: true },
    profileImage: { type: String },
    role: { type: String, enum: ["super_admin", "admin"], default: "admin" },
    permissions: [{ type: String }],
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

const Admin: Model<IAdmin> =
  mongoose.models.Admin ?? mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;
