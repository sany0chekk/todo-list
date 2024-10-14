import { createTask, getTasks } from "../services/tasks.js";

export const getAllTasksController = async (req, res) => {
  const tasks = await getTasks();

  res.status(200).json({
    status: 200,
    message: "Successfully find tasks",
    data: tasks,
  });
};

export const createTaskController = async (req, res) => {
  const task = await createTask(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully create a task",
    data: task,
  });
};
