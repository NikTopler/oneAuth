import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { whiteListMiddleware } from "./middlewares";
import { validateEnv } from "./utils";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

validateEnv();

app.use(helmet());
app.use(cors());
app.use(express.json())
app.use(whiteListMiddleware)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});