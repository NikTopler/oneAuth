type FormFieldProps = {
    name: string;
    label: string;
    required: boolean;
    value: string;
    pattern: false | string;
    validationUrl?: string;
    type: 'text' | 'password' | 'email' | 'tel' | 'number';
    valid: boolean;
    errorMessage: string | null;
}

const FORM_FIELD_PROPS: Readonly<FormFieldProps> = {
    name: '',
    label: '',
    value: '',
    pattern: false,
    required: true,
    type: 'text',
    valid: false,
    errorMessage: null
};

const REGEX = {
    password: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{12,}$'
};

const ROUTES = {
    validation: {
        email: '/api/validation/email',
        password: '/api/validation/password'
    },
    signUp: {
        view: '/sign-up',
        submit: '/sign-up'
    },
    signIn: {
        view: '/sign-in',
        submit: '/sign-in'
    },
    dashboard: {
        view: '/dashboard'
    }
}

export {
    FORM_FIELD_PROPS,
    ROUTES,
    REGEX
}