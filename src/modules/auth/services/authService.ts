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

        console.log(errorCode);
        return errorCode;
    }

}

export default {
    signUpWithPassword
}