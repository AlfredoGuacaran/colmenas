import express from 'express';
import { createCosecha, getCosechas } from '../controllers/cosechas.js';

const router = express.Router();

router.put('/createcosecha', createCosecha);
router.get('/getcosechas', getCosechas);

router.get('/', (req, res) => {
  try {
    res.status(200).json('server is runnig');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
