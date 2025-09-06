const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
      maxlength: [40, "title should not be more than 40 characters"],
      maxlength: [3, "title should not be at least 3 characters"],
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: [true, "Please provide a artist"],
    },
    releaseData: {
      type: Date,
      default: Date.now(),
    },
    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
    },
    duration: {
      type: Number,
      required: [true, "Please provide an duration"],
    },
    autioUrl: {
      type: String,
      required: [true, "please provide an autio URL"],
    },
    coverImage: {
      type: String,
      default: "https://res.cloudinary.com/demo/image/upload/v1/sample.jpg",
    },
    genre: {
      type: String,
      required: [true, "please provide a genre"],
      trim: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    isExplicit: {
      type: Boolean,
      default: false,
    },
    featuredArtists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist",
      },
    ],
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
