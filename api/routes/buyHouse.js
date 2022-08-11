import express from "express";

import { 
    createHouse, 
    updateHouse,
    deleteHouse, 
     getHouse, 
     getHouses 
    } from "../controllers/buyHouse.js";

import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHouse);

//UPDATE
router.put("/:id", verifyAdmin, updateHouse);
//DELETE
router.delete("/:id", verifyAdmin, deleteHouse);
//GET

router.get("/:id", getHouse);
//GET ALL
router.get("/", getHouses);

export default router