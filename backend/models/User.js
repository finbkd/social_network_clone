import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    friends: {
      type: Array, //[user1ID, user2ID, user3ID]
      default: [],
    },
    // followers: {
    //   type: Array, //[user1ID, user2ID, user3ID]
    //   default: [],
    // },
    // followings: {
    //   type: Array, //[user1ID, user2ID, user3ID]
    //   default: [],
    // },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: String,
      enum: ["Single", "Married", "Dating"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
