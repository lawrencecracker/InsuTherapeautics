import mongoose from 'mongoose';

const investorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  reportLink: { type: String },
  date: { type: Date, default: Date.now },
});

export const Investor = mongoose.model('Investor', investorSchema);
