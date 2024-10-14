import { TasksCollection } from "../db/models/task.js";

export const getTasks = async (userId) => {
  const tasks = await TasksCollection.find({ userId: userId });
  return tasks;
};

export const createTask = async (payload) => {
  const task = await TasksCollection.create(payload);
  return task;
};

export const updateTask = async (taskId, userId, payload) => {
  const task = TasksCollection.findOneAndUpdate(
    {
      _id: taskId,
      userId: userId,
    },
    payload,
    { new: true, includeResultMetadata: true }
  );

  if (!task || !task.value) return null;

  return {
    task: task.value,
    isNew: Boolean(task?.lastErrorObject?.upserted),
  };
};

export const deleteTask = async (taskId, userId) => {
  const task = await TasksCollection.findOneAndDelete({
    _id: taskId,
    userId: userId,
  });

  return task;
};
