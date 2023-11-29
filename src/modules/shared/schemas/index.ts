import { Email, emailSchema, isEmail } from "./emailSchema";
import { Url, isUrl, urlSchema } from "./urlSchema";

export type {
    Url,
    Email
}

export {
    urlSchema,
    isUrl,
    emailSchema,
    isEmail
}