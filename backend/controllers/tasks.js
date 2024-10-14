import createHttpError from "http-errors";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../services/tasks.js";

export const getAllTasksController = async (req, res) => {
  const userId = req.user._id;
  const tasks = await getTasks(userId);

  res.json({
    status: 200,
    message: `Successfully find ${tasks.length} tasks`,
    data: tasks,
  });
};

export const createTaskController = async (req, res) => {
  const payload = {
    ...req.body,
    userId: req.user._id,
  };

  const task = await createTask(payload);

  res.json({
    status: 201,
    message: "Successfully create a task",
    data: task,
  });
};

export const updateTaskController = async (req, res) => {
  const { taskId } = req.params;
  const userId = req.user._id;

  const result = await updateTask(taskId, userId, req.body);

  if (!result) throw createHttpError(404, "Task not found!");

  res.json({
    status: 200,
    message: "Successfully updated a task",
    data: result.task,
  });
};

export const deleteTaskController = async (req, res) => {
  const { taskId } = req.params;
  const userId = req.user._id;

  const task = await deleteTask(taskId, userId);

  if (!task) throw createHttpError(404, "Task not found!");

  res.status(204).send();
};
