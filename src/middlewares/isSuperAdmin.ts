import { NextFunction, Request, Response } from "express";



export const isSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
    if (req.tokenData.roleName !== "superAdmin") {
        return res.status(403).json({
            success: false,
            message: "UNAUTHORIZED"
        })
    }
    next()
}
