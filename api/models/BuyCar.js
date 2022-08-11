import mongoose from "mongoose";
const BuyCarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
    brand: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      distance: {
        type: String,
        required: true,
      },
      photos: {
        type: [String],
      },
      price: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
  
},
{ timestamps: true }
);

export default mongoose.model("BuyCar", BuyCarSchema)