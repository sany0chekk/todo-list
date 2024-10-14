import { Router } from "express";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import {
  createTaskController,
  getAllTasksController,
} from "../controllers/tasks.js";

const router = Router();

router.get("/", ctrlWrapper(getAllTasksController));
router.post("/", ctrlWrapper(createTaskController));

export default router;
