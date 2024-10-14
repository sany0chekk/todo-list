import { Router } from "express";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import {
  createTaskController,
  deleteTaskController,
  getAllTasksController,
  updateTaskController,
} from "../controllers/tasks.js";
import { authenticate } from "../middlewares/authenticate.js";
import { checkUser } from "../middlewares/checkUser.js";

const router = Router();

router.use(authenticate);

router.get("/", ctrlWrapper(getAllTasksController));
router.post("/", ctrlWrapper(createTaskController));
router.patch("/:taskId", checkUser, ctrlWrapper(updateTaskController));
router.delete("/:taskId", checkUser, ctrlWrapper(deleteTaskController));

export default router;
