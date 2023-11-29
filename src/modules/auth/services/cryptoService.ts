import crypto from "crypto";

function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

function generateHash(txt: string, salt: string) {
    return crypto.pbkdf2Sync(txt, salt, 10000, 512, 'sha512').toString('hex');
}

function hashText(txt: string) {
    const salt = generateSalt();
    const hash = generateHash(txt, salt);
    return {
        salt,
        hash
    }
}

function hashPassword(password: string) {
    const { salt, hash } = hashText(password);
    const buffer = Buffer.from(`${salt}:${hash}`);
    return buffer.toString('base64');
}

function getSaltAndHash(password: string) {
    const buffer = Buffer.from(password, 'base64');
    const [salt, hash] = buffer.toString('utf8').split(':');
    return {
        salt,
        hash
    }
}

function verify(txt: string, salt: string, hash: string) {
    return generateHash(txt, salt) === hash;
}

export default {
    hashText,
    hashPassword,
    getSaltAndHash,
    verify
}