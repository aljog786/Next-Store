import mongoose, { Schema, models, model } from 'mongoose';

export type UserRole = 'user' | 'admin';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string; // hashed
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  { timestamps: true }
);

export default (models.User as mongoose.Model<IUser>) || model<IUser>('User', UserSchema);
