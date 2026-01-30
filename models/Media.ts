import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Media = mongoose.model('Media', mediaSchema);
