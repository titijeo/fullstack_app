import mongoose from "mongoose";
const TravelCarSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  depcity: {
    type: String,
    required: true,
  },
  arrcity: {
    type: String,
    required: true,
  },
  
  seats: {
    type: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
   
},
{ timestamps: true },

);

export default mongoose.model("TravelCar", TravelCarSchema)