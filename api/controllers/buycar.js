import BuyCar from "../models/BuyCar.js";

export const createCar = async (req, res, next) => {
  const newCar = new BuyCar(req.body);
  try {
    const savedCar = await newCar.save();
    res.status(200).json(savedCar);
  } catch (err) {
    next(err);
  }
};

export const updateCar = async (req, res, next) => {
  try {
    const updateCar = await BuyCar.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateCar);
  } catch (err) {
    next(err);
  }
};

export const deleteCar = async (req, res, next) => {
  try {
    await BuyCar.findByIdAndDelete(req.params.id);
    res.status(200).json("car has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getCar = async (req, res, next) => {
  try {
    const car = await BuyCar.findById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
};

export const getCars = async (req, res, next) => {
  try {
    const cars = await BuyCar.find();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
};

//export const getCars = async (req, res, next) => {
    //try {
//const cars = await BuyCar.find();
//res.status(200).json(cars);
//} catch (err) {
//next(err);
//}
//};



export const countByBrand = async (req, res, next) => {
  const brands = req.query.brands.split(",");
  try {
    const mark = await Promise.all(
      brands.map((brand) => {
        return BuyCar.countDocuments({ brand: brand });
      })
    );
    res.status(200).json(mark);
  } catch (err) {
    next(err);
  }
};
