import express from "express";
import { Media } from '../models/Media';


const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const media = await Media.find().sort({ date: -1 });
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch media" });
  }
});

router.post("/", async (req, res) => {
  try {
    const media = new Media(req.body);
    await media.save();
    res.status(201).json(media);
  } catch (err) {
    res.status(500).json({ error: "Failed to create media" });
  }
});

export default router;
