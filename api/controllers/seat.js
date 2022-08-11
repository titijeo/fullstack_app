import Seat from "../models/Seat.js";
import TravelCar from "../models/TravelCar.js";

export const createSeat = async (req, res, next) => {
    const travelCarId = req.params.travelCarid;
    const newSeat = new Seat(req.body);
  
    try {
      const savedSeat = await newSeat.save();
      try {
        await TravelCar.findByIdAndUpdate(travelCarId, {
          $push: { seats: savedSeat._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedSeat);
    } catch (err) {
      next(err);
    }
  };

  export const updateSeat = async (req, res, next) => {
    try {
      const updatedSeat = await Seat.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedSeat);
    } catch (err) {
      next(err);
    }
  };


  export const deleteSeat = async (req, res, next) => {
    const travelcarId = req.params.travelcarid;
    try {
      await Seat.findByIdAndDelete(req.params.id);
      try {
        await TravelCar.findByIdAndUpdate(travelcarId, {
          $pull: { seats: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("seat has been deleted.");
    } catch (err) {
      next(err);
    }
  };

  export const getSeat = async (req, res, next) => {
    try {
      const seat = await Seat.findById(req.params.id);
      res.status(200).json(seat);
    } catch (err) {
      next(err);
    }
  };

  export const getSeats = async (req, res, next) => {
    try {
      const seats = await Seat.find();
      res.status(200).json(seats);
    } catch (err) {
      next(err);
    }
  };
  
