const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide a name"],
      trim: true,
      maxlength: [40, "Name shoud not be more than 40 characters "],
      minlength: [40, "Name shoud not be at least 3 characters "],
    },
    email: {
      type: String,
      require: [true, "Please provide an email"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: [true, "Please provide a password"],
      minlength: [6, "Password shoould be at least 6 characters"],
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2018/11/21/08/37/brain-3829057_1280.jpg",
    },
    isAdming: {
      type: Boolean,
      default: false,
    },
    likedSongs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
    likedAlbums: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
      },
    ],
    followedArtists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist",
      },
    ],
    followedPlaylists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist",
      },
    ],
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
