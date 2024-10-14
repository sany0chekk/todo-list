import Joi from "joi";

export const createTasksSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(3).max(200).required(),
  isFinished: Joi.boolean(),
  userId: Joi.string().required(),
});
