export type ErrorCode = {
    name: string;
    code: string;
    description: string;
    message: string;
}

const ERROR_CODES: { [code: string]: ErrorCode } = {
    ERR_EMPTY_FIELDS: {
        name: 'ERR_EMPTY_FIELDS',
        code: 'E001',
        description: 'Empty fields',
        message: 'Please fill out all fields'
    },
    ERR_INVALID_EMAIL: {
        name: 'ERR_INVALID_EMAIL',
        code: 'E002',
        description: 'Invalid email',
        message: 'Please enter a valid email'
    },
    ERR_INVALID_CREDENTIALS: {
        name: 'ERR_INVALID_CREDENTIALS',
        code: 'E003',
        description: 'Invalid credentials',
        message: 'Email or password is incorrect'
    },
    ERR_INVALID_PHONE_NUMBER: {
        name: 'ERR_INVALID_PHONE_NUMBER',
        code: 'E004',
        description: 'Invalid phone number',
        message: 'Please enter a valid phone number'
    },
    ERR_INVALID_FIRST_NAME: {
        name: 'ERR_INVALID_FIRST_NAME',
        code: 'E005',
        description: 'Invalid first name',
        message: 'Please enter a valid first name'
    },
    ERR_INVALID_LAST_NAME: {
        name: 'ERR_INVALID_LAST_NAME',
        code: 'E006',
        description: 'Invalid last name',
        message: 'Please enter a valid last name'
    },
    ERR_EMAIL_ALREADY_EXISTS: {
        name: 'ERR_EMAIL_ALREADY_EXISTS',
        code: 'E007',
        description: 'Email already exists',
        message: 'This email already exists'
    },
    ERR_COULD_NOT_SIGN_UP: {
        name: 'ERR_COULD_NOT_SIGN_UP',
        code: 'E008',
        description: 'Could not sign up',
        message: 'Could not sign up. Please try again later.'
    },
    ERR_NO_PASSWORD_SET: {
        name: 'ERR_NO_PASSWORD_SET',
        code: 'E009',
        description: 'No password set',
        message: 'On initial sign up you used social sign up options, please sign in using Google, Facebook or Apple and then go into settings and set a password.',
    },
    ERR_SOMETHING_WENT_WRONG: {
        name: 'ERR_SOMETHING_WENT_WRONG',
        code: 'E009',
        description: 'Something went wrong',
        message: 'Something went wrong. Please try again later.'
    }
};

export default ERROR_CODES;