const mongoose = require('mongoose');

const tourSchema = mongoose.Schema(
  {
    tour_id: {
      type: Number,
      required: true,
      unique: true,
    },
    tour_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    departure_date: {
      type: Date,
      required: true,
    },
    duration_days: {
      type: Number,
      required: true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model('Tour', tourSchema);
