import express from "express";

import { 
    createCar, 
    updateCar,
    deleteCar, 
     getCar, 
     getCars, 
     countByBrand
    } from "../controllers/buycar.js";

import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCar);

//UPDATE
router.put("/:id", verifyAdmin, updateCar);
//DELETE
router.delete("/:id", verifyAdmin, deleteCar);
//GET

router.get("/find/:id", getCar);
//GET ALL
router.get("/", getCars);
router.get("/countByBrand", countByBrand);

export default router