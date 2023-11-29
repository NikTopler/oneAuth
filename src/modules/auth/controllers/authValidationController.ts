import { Request, Response } from "express";
import { FORM_FIELD_PROPS, ROUTES } from "../../../config";
import { isEmail } from "../../shared/schemas";

function email(req: Request, res: Response) {

    const email = req.body['email-field'];
    const formProps = {
        ...FORM_FIELD_PROPS,
        name: 'email',
        label: 'Email',
        type: 'email',
        autocomplete: 'email',
        validationUrl: ROUTES.validation.email,
    };

    if (email === undefined) {
        formProps.errorMessage = 'No email was provided';
    } else {
        formProps.value = email;
        formProps.valid = isEmail(email);
        formProps.errorMessage = formProps.valid ? null : 'Incorrect email';
    }

    res.render('atoms/form-field', formProps);

}

function password(req: Request, res: Response) {

    const password = req.body['password-field'];
    const formProps = {
        ...FORM_FIELD_PROPS,
        name: 'password',
        label: 'Password',
        type: 'password'
    };

    if (password === undefined) {
        formProps.errorMessage = 'No password was provided';
    } else {
        formProps.value = password;
        formProps.valid = password.length >= 8;
        formProps.errorMessage = formProps.valid ? null : 'Password must be at least 8 characters long';
    }

    res.render('atoms/form-field', formProps);

}

export default {
    email,
    password
}