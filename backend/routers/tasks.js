import { Router } from "express";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import {
  createTaskController,
  getAllTasksController,
} from "../controllers/tasks.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = Router();

router.use(authenticate);

router.get("/", ctrlWrapper(getAllTasksController));
router.post("/", ctrlWrapper(createTaskController));

export default router;
