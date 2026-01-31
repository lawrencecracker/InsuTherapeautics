import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { Media } from './models/Media';
import { Investor } from './models/Investor';
import mediaRoutes from './routes/media';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/media", mediaRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => res.send("Server is running"));

app.get("/api/investor", async (req, res) => {
  try {
    const investors = await Investor.find().sort({ date: -1 });
    res.json(investors);
  } catch {
    res.status(500).json({ error: "Failed to fetch investors" });
  }
});

app.post("/api/investor", async (req, res) => {
  try {
    const newInvestor = new Investor(req.body);
    await newInvestor.save();
    res.status(201).json(newInvestor);
  } catch (err) {
    console.error("Error creating investor:", err);
    res.status(500).json({ error: "Failed to create investor" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
