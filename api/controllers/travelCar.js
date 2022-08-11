//import Seat from "../models/Seat.js";
import TravelCar from "../models/TravelCar.js";

export const createTravelCar = async (req,res, next)=>{
    const newTravelCar = new TravelCar(req.body)
    try{
        const savedTravelCar = await newTravelCar.save()
        res.status(200).json(savedTravelCar)
    }catch(err){
        next(err);
    }
}

export const updateTravelCar = async (req,res, next)=>{
    try{
        const updateTravelCar = await TravelCar.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, 
            {new:true}
            );
        res.status(200).json(updateTravelCar)
    }catch(err){
        next(err);
    }
}

export const deleteTravelCar = async (req,res, next)=>{
    try{

        await TravelCar.findByIdAndDelete(req.params.id)
        res.status(200).json("Travelcar has been deleted")

    }catch(err){
        next(err);
    }
}



  export const deleteTravelCarSeat = async (req, res, next) => {
    const travelcarId = req.params.travelcarid;
    try {
      await TravelCar.findByIdAndDelete(req.params.id);
      try {
        await TravelCar.findByIdAndUpdate(travelcarId, {
          $pull: { seats: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(" travel seat has been deleted.");
    } catch (err) {
      next(err);
    }
  };




export const getTravelCar = async (req,res, next)=>{
    try{
        const travelcar = await TravelCar.findById(req.params.id)
        res.status(200).json(travelcar)
    }catch(err){
        next(err);
    }
}

export const getTravelCars= async (req,res, next)=>{
    try{
        const travelcars = await TravelCar.find();
        res.status(200).json(travelcars);
    }catch(err){
        next(err);
    }
}