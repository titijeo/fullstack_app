import BuyHouse from "../models/BuyHouse.js";

export const createHouse = async (req,res, next)=>{
    const newHouse = new BuyHouse(req.body)
    try{
        const savedHouse = await newHouse.save()
        res.status(200).json(savedHouse)
    }catch(err){
        next(err);
    }
}

export const updateHouse = async (req,res, next)=>{
    try{
        const updateHouse = await BuyHouse.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, 
            {new:true}
            );
        res.status(200).json(updateHouse)
    }catch(err){
        next(err);
    }
}

export const deleteHouse = async (req,res, next)=>{
    try{

        await BuyHouse.findByIdAndDelete(req.params.id)
        res.status(200).json("House has been deleted")

    }catch(err){
        next(err);
    }
}

export const getHouse = async (req,res, next)=>{
    try{
        const house = await BuyHouse.findById(req.params.id)
        res.status(200).json(house)
    }catch(err){
        next(err);
    }
}

export const getHouses= async (req,res, next)=>{
    try{
        const houses = await BuyHouse.find();
        res.status(200).json(houses);
    }catch(err){
        next(err);
    }
}