import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUser);
router.post("/createMany", userController.createManyUsers);
router.get("/:id", userController.getUserById);
export const userRoutes = router;
