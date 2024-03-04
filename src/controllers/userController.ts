import { Request, Response } from "express";
import { User } from "../models/User";
import { profile } from "console";

export const getUsers = async (req: Request, res: Response) => {

    try {
        // recuperar la data
        const users = await User.find()

        res.status(200).json({
            suceess: true,
            message: "users retrieved successfully",
            data: users
        })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "users can't be retrieved",
                error: error
            }
        )
    }
}
// PROFILE
export const getProfile = async (req: Request, res: Response) => {
    
    try {
        const userId= req.tokenData.userId
        
        const profile = await User.findOne(
           {
                where: {
                    id: userId
                },
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true
                },
             
        
           }
        )

        res.status(200).json({
            suceess: true,
            message: "Profile retrieved successfully",
            data: profile
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Profile can't be retrieved",
            error: error
        })
    }

}