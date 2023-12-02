import { cleanEnv, port, str } from "envalid";

function validateEnv() {
    cleanEnv(process.env, {
        PORT: port(),
        DATABASE_URL: str(),
        SESSION_SECRET: str()
    });
}

export default validateEnv;