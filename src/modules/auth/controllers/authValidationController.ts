import { Request, Response } from "express";
import { FORM_FIELD_PROPS, FormFieldProps, ROUTES } from "../../../config";
import { isEmail } from "../../shared/schemas";

function email(req: Request, res: Response) {

    const email = req.body['email-field'];
    const formProps: FormFieldProps = {
        ...FORM_FIELD_PROPS,
        name: 'email',
        label: 'Email',
        type: 'email',
        autocomplete: 'email',
        serverValidation: {
            validationUrl: ROUTES.validation.email
        }
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


export default {
    email
}