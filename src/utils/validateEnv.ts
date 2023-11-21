import { cleanEnv, port, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    DATABASE_URL: str(),
  });
}

export default validateEnv;

