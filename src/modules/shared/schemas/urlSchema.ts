import { z } from "zod";

const urlSchema = z.string().url();

type Url = z.infer<typeof urlSchema> & { kind: "Url" };

function isUrl(value: string): value is Url {
    return urlSchema.safeParse(value).success;
}

export type {
    Url
}

export {
    urlSchema,
    isUrl
}