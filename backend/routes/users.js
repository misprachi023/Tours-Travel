import express from "express";
import {
    createUser,
    updateUser,
    deleteUser,
    getAllUser,
    getSingleUser,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getSingleUser);
router.get("/", getAllUser);

export default router;
