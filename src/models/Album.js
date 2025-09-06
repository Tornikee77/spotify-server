const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: [true, "Please provide a title"],
      maxlength: [40, "title shoud not be more than 40 characters "],
      minlength: [3, "title shoud not be at least 3 characters "],
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      require: [true, "Please provide an artist"],
      ref: "Artist",
    },
    releaseDate: { type: String, default: Date.now() },
    coverImage: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2016/07/20/10/57/nebula-10-1530144_1280.png",
    },
    song: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
    genre: {
      type: String,
      require: [true, "Please provide a genre"],
      trim: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [200, "Description shoud not be more than 200 characters "],
      minlength: [3, "Description shoud not be at least 3 characters "],
      default: "No description",
    },
    isExplicit: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
