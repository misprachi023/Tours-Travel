import express from "express";
import  {createTour, updateTour, deleteTour, getAllTour, getSingleTour}  from "../controllers/tourController.js";

const router = express.Router();

router.post('/', createTour)


router.put('/:id', updateTour)


router.delete('/:id', deleteTour)


router.get('/:id', getSingleTour)

router.get('/', getAllTour)


export default router