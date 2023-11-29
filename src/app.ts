import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { validateEnv } from "./modules/shared/utils";
import authRoutes from "./modules/auth/authRoutes";

dotenv.config();

const app: Express = express();

validateEnv();

app.use(express.static(__dirname + '/../public'));

app.use(
    helmet({
        contentSecurityPolicy: false
    })
);
app.use(cors());
app.use(express.json());

app.use(authRoutes);

export default app;
