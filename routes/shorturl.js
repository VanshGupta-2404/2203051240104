const express = require("express");
const router = express.Router();
const ShortUrl = require("../models/ShortUrl");
const generateShortcode = require("../utils/generateShortcode");

router.post("/shorturls", async (req, res) => {
  const { url, validity = 30, shortcode } = req.body;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "Invalid or missing URL" });
  }

  let finalShortcode = shortcode || generateShortcode();

  if (!/^[a-zA-Z0-9]{4,10}$/.test(finalShortcode)) {
    return res.status(400).json({ error: "Invalid shortcode format" });
  }

  const existing = await ShortUrl.findOne({ shortcode: finalShortcode });
  if (existing) {
    return res.status(409).json({ error: "Shortcode already exists" });
  }

  const expiryDate = new Date(Date.now() + validity * 60000);
  const shortUrl = new ShortUrl({ url, shortcode: finalShortcode, expiry: expiryDate });
  await shortUrl.save();

  res.status(201).json({
    shortLink: `https://hostname:port/${finalShortcode}`,
    expiry: expiryDate.toISOString()
  });
});

router.get("/:shortcode", async (req, res) => {
  const { shortcode } = req.params;
  const record = await ShortUrl.findOne({ shortcode });

  if (!record) return res.status(404).json({ error: "Shortcode not found" });
  if (record.expiry < new Date()) return res.status(410).json({ error: "Short link expired" });

  res.redirect(record.url);
});

module.exports = router;
