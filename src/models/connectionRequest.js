const mongoose = require("mongoose");

const connectionsRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
      //   ref:"User", //reference to the user collection
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    status: {
      type: String,
      required: true,

      enum: {
        values: ["interested", "ignored", "rejected", "accepted"],
        message: `{VALUE} incorrect status type`,
      },   
    },
  },
  { timestamps: true }
);

connectionsRequestSchema.index({ fromUserId: 1, toUserId: 1 });

connectionsRequestSchema.pre("save", function (next) {
  const connectionRequest = this;
  //checking if the fromUserId is same as toUserId
  if (connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
    throw new Error("Oops! Cannot Send Connection Request To Yourself!");
  }
  next();
});
const ConnectionRequestModel = new mongoose.model(
  "ConnectionRequest",
  connectionsRequestSchema
);
module.exports = ConnectionRequestModel;
