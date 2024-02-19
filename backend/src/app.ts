import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
config();

const app = express();

//middlewares
app.use(express.json());

// TODO remove in production
app.use(morgan("dev"));

app.use("/api/v1, appRouter");

export default app;
