import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";

import { router } from "./controller";

(async () => {
  if (!AppDataSource.isInitialized)
    await AppDataSource.initialize()
      .then(() => console.log("🌍 Connected to database"))
      .catch((error) => {
        console.log("❌ Could not connect to the database");
        console.log(`error: ${error}`);
      });
})();

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("Server is running on port: " + port));
