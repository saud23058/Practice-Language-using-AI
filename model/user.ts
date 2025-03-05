import mongoose, { Document, Schema, model } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  profileImage: string;
  language: string;
  streak: number;
  lastUpdatedDate: Date | null;
  quizMarks: number;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      required: true,
    },
    streak: {
      type: Number,
      default: 0,
    },
    lastUpdatedDate: {
      type: Date,
      default: null,
    },
    quizMarks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel =
  mongoose.models.User || model<IUser>("User", userSchema);
