import mongoose from 'mongoose';
import CosechaModel from '../models/cosecha.js';

export const createCosecha = async (req, res) => {
  try {
    const cosecha = req.body;
    const newCosecha = new CosechaModel(cosecha);
    console.log(newCosecha);
    await newCosecha.save();
    console.log(newCosecha);
    res.status(201).json(newCosecha);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getCosechas = async (req, res) => {
  try {
    const cosechas = await CosechaModel.find();
    res.status(200).json(cosechas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
