import express from "express";
import cors from "cors";
import pino from "pino-http";
import cookieParser from "cookie-parser";

import router from "./routers/index.js";

import { env } from "./utils/env.js";

const PORT = env("PORT", "5173");

export const startServer = () => {
  const app = express();

  app.use(cookieParser());
  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.get("/", (req, res) => {
    res.json({
      message: "Hello world!",
    });
  });

  app.use(router);

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
