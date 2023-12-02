import { Request, Response, NextFunction } from "express";

const routesForAuth = [
    '/sign-in',
    '/sign-up'
];

const exactPathsToIgnore = [
    '/sign-out',
    '/favicon.ico'
];

const pathsToIgnore = [
    '/public',
    '/api'
];

function routeGuard(req: Request, res: Response, next: NextFunction) {

    const isUserAuthenticated = !!req.session?.user;
    const isPathToIgnore = pathsToIgnore.some(path => req.path.startsWith(path)) || exactPathsToIgnore.includes(req.path);

    if (!isPathToIgnore) {

        if (isUserAuthenticated && routesForAuth.includes(req.path)) {
            return res.redirect('/dashboard');
        }

        if (!isUserAuthenticated && !routesForAuth.includes(req.path)) {
            return res.redirect('/sign-in');
        }

    }

    next();

}

export default routeGuard;