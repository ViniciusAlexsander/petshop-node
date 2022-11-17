import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import { router } from "./controllers";

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("Server is running on port: " + port));
