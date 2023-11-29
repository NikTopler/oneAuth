type FormFieldProps = {
    name: string;
    label: string;
    required: boolean;
    value: string;
    pattern: false | string;
    validationUrl?: string;
    type: 'text' | 'password' | 'email' | 'tel' | 'number';
    autocomplete: false | 'current-password' | 'email' | 'username'
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
    autocomplete: false,
    valid: false,
    errorMessage: null
};

const REGEX = {
    password: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{12,}$'
};

const ROUTES = {
    validation: {
        email: '/api/validation/email'
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

export type {
    FormFieldProps
}

export {
    FORM_FIELD_PROPS,
    ROUTES,
    REGEX
}