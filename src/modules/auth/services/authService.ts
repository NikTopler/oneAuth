import { prismaClient } from "../../../infrastructure";
import cryptoService from "./cryptoService";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ERROR_CODES, ErrorCode } from "../../../config";
import { Users } from "@prisma/client";
import { Email } from "../../shared/schemas";

async function signUpWithPassword(email: Email, password: string): Promise<Users | ErrorCode> {

    try {

        return await prismaClient.users.create({
            data: {
                email,
                password: cryptoService.hashPassword(password)
            }
        });

    } catch (error) {

        let errorCode: ErrorCode = ERROR_CODES.ERR_COULD_NOT_SIGN_UP;

        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                errorCode = ERROR_CODES.ERR_EMAIL_ALREADY_EXISTS;
            }
        }

        return errorCode;
    }

}

async function signInWithPassword(email: Email, password: string): Promise<Users | ErrorCode> {

    try {

        const user = await prismaClient.users.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            return ERROR_CODES.ERR_INVALID_CREDENTIALS;
        }

        if (!user.password) {
            return ERROR_CODES.ERR_NO_PASSWORD_SET;
        }

        const { salt, hash } = cryptoService.getSaltAndHash(user.password);

        if (!cryptoService.verify(password, salt, hash)) {
            return ERROR_CODES.ERR_INVALID_CREDENTIALS;
        }

        return user;

    } catch (error) {
        console.log(error);
        return ERROR_CODES.ERR_SOMETHING_WENT_WRONG;
    }

}

export default {
    signUpWithPassword,
    signInWithPassword
}