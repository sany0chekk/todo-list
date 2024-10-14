import { model, Schema } from "mongoose";

const tasksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TasksCollection = model("tasks", tasksSchema);
