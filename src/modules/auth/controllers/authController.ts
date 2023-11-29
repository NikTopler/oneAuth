import { Request, Response } from "express";
import { ERROR_CODES, FORM_FIELD_PROPS, REGEX, ROUTES } from "../../../config";
import { authService } from "../services";
import { emailSchema } from "../../shared/schemas";

const SIGN_UP_DEFAULT_PROPS = {
    title: 'Sign Up',
    description: 'Sign up page',
    form: {
        errors: [],
        email: {
            ...FORM_FIELD_PROPS,
            name: 'email',
            label: 'Email',
            validationUrl: ROUTES.validation.email
        },
        password: {
            ...FORM_FIELD_PROPS,
            name: 'password',
            label: 'Password',
            pattern: REGEX.password,
            validationUrl: ROUTES.validation.password
        }
    }
};

function signUpView(req: Request, res: Response) {
    res.render('pages/sign-up', SIGN_UP_DEFAULT_PROPS);
}

async function signUp(req: Request, res: Response) {

    const email = req.body['email-field'];
    const password = req.body['password-field'];

    if (!email || !password) {
        res.render('molecules/auth-form', {
            form: {
                ...SIGN_UP_DEFAULT_PROPS.form,
                errors: [
                    ERROR_CODES.ERR_EMPTY_FIELDS
                ]
            }
        });
        return;
    }

    const isEmailValid = emailSchema.safeParse(email).success;
    const isPasswordValid = (new RegExp(REGEX.password)).test(password);

    if (!isEmailValid || !isPasswordValid) {
        res.render('molecules/auth-form', {
            form: {
                ...SIGN_UP_DEFAULT_PROPS.form,
                errors: [
                    ...(isEmailValid ? [] : [ERROR_CODES.ERR_INVALID_EMAIL]),
                    ...(isPasswordValid ? [] : [ERROR_CODES.ERR_INVALID_PASSWORD])
                ]
            }
        });
        return;
    }

    const authRes = await authService.signUpWithPassword(email, password);

    if ('code' in authRes) {
        res.render('molecules/auth-form', {
            form: {
                ...SIGN_UP_DEFAULT_PROPS.form,
                errors: [
                    authRes
                ]
            }
        });
        return;
    }

    res.redirect(ROUTES.dashboard.view);

}

export default {
    signUpView,
    signUp
}