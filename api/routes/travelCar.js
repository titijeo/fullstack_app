import express from "express";
import { createTravelCar, 
    deleteTravelCar, deleteTravelCarSeat, getTravelCar,
     getTravelCars, 
     updateTravelCar 
    } from "../controllers/travelCar.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createTravelCar);

//UPDATE
router.put("/:id", verifyAdmin, updateTravelCar);
//DELETE
router.delete("/:id", verifyAdmin, deleteTravelCar);
//DELETE travel seat
//router.delete("/:id/:seatid", verifyAdmin, deleteTravelCarSeat);
//GET

router.get("/:id", getTravelCar);
//GET ALL
router.get("/", getTravelCars);

export default router