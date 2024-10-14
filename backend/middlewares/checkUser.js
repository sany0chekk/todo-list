import createHttpError from "http-errors";
import { TasksCollection } from "../db/models/task.js";

export const checkUser = async (req, res, next) => {
  const { user } = req;

  if (!user) {
    next(createHttpError(401, "Access denied: No user logged in"));
    return;
  }

  const { taskId } = req.params;
  if (!taskId) {
    next(createHttpError(400, "TaskID is required"));
    return;
  }

  const checkTask = await TasksCollection.findOne({
    _id: taskId,
    userId: user._id,
  });

  if (!checkTask) {
    next(
      createHttpError(404, "You do not have permission to access this task")
    );
    return;
  }

  next();
};
