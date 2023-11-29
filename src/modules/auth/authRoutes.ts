import express from "express";
import { AuthController, AuthValidationController } from "./controllers";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', 'src/modules/auth/views');

app.post('/api/validation/email', AuthValidationController.email);

app.get('/sign-up', AuthController.signUpView);
app.post('/sign-up', AuthController.signUp);

export default app;