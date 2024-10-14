import { TasksCollection } from "../db/models/task.js";

export const getTasks = async () => {
  const tasks = await TasksCollection.find();
  return tasks;
};

export const createTask = async (payload) => {
  const task = await TasksCollection.create(payload);
  return task;
};
