import { Request, Response, NextFunction } from 'express';

export class PermitUserMiddleware {
    
    static validateRole(allowedRoles: string[]) {
        return (req: Request, res: Response, next: NextFunction) => {
            const userRoles = req.body.user?.roles;

            if (!userRoles || !allowedRoles.includes(userRoles[0])) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            next();
        };
    }
}