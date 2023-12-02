import express, { Express } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { validateEnv } from "./modules/shared/utils";
import authRoutes from "./modules/auth/authRoutes";
import routes from "./modules/shared/routes";
import session, { SessionOptions } from "express-session";
import { routeGuard } from "./modules/shared/middlewares";

declare module "express-session" {
    interface SessionData {
        user: {
            email: string;
        } | null;
    }
}

dotenv.config();

const app: Express = express();

validateEnv();

app.use(express.static(__dirname + '/../public'));

const sessionConfig: SessionOptions = {
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}

if(process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
    if(sessionConfig.cookie?.secure) {
        sessionConfig.cookie.secure = true;
    }
}

app.use(session(sessionConfig));

app.use(
    helmet({
        contentSecurityPolicy: false
    })
);
app.use(cors());
app.use(express.json());

app.use(routeGuard);
app.use(authRoutes);
app.use(routes);
app.use((req, res) => {
    res.status(404).send('Page not found. Please check the URL and try again.');
});

export default app;
