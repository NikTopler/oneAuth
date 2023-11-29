import { z } from "zod";

const emailSchema = z.string().email();

type Email = z.infer<typeof emailSchema> & { kind: "Email" };

function isEmail(value: string): value is Email {
    return emailSchema.safeParse(value).success;
}

export type {
    Email
}

export {
    emailSchema,
    isEmail
}