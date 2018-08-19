import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
});

export default mongoose.model('User', userSchema);
