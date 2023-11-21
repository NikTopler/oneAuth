import { Request, Response, NextFunction } from "express";
import { PartnerService } from "../services";

async function whiteListMiddleware(req: Request, res: Response, next: NextFunction) {

    try {

        const allowedDomains = ['localhost', ...await PartnerService.getDomains()];

        if (!allowedDomains.includes(req.hostname)) {
            return res.status(403).json({
                message: "Forbidden"
            });
        }

        next();

    } catch (error: any) {

        return res.status(500).json({
            message: error.message
        });

    }

}

export default whiteListMiddleware;