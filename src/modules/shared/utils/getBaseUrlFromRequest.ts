import { Request } from "express";

function getBaseUrlFromRequest(req: Request) {
    return `${req.protocol}://${req.get('host')}`;
}

export default getBaseUrlFromRequest;