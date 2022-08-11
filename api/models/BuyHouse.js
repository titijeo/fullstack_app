import mongoose from "mongoose";
const BuyHouseSchema = new mongoose.Schema({
    name: {
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
    distance: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },

    price: {
        type: String,
    },

    rooms: {
        type: Number,
    },
    
},
    { timestamps: true },
);

export default mongoose.model("BuyHouse", BuyHouseSchema)