const mongoose = require('mongoose');

const ThreatSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  threatLevel: { type: String, required: true },
  confidence: { type: Number, required: true },
  type: { type: String, enum: ['global', 'local'], default: 'global' },
  region: { type: String },

  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },

  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  url: { type: String }
});

module.exports = mongoose.model('Threat', ThreatSchema);