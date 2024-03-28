import { Request, Response } from "express";
import { User } from "../models/User";
import { log, profile } from "console";

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
        const userId = req.tokenData.userId

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
// MODIFICAR USUARIO

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.userId
        const firstName = req.body.firstName
        const lastName = req.body.firstName

        const userToUpdate = await User.findOne(
            {
                where: {
                    id: userId,

                }
            }
        )

        if (!userToUpdate) {
            return res.status(404).json({
                success: false,
                messagge: "User not found",
            })
        }

        const userUpdated = await User.update(
            {
                id: userId
            },
            {
                first_name: firstName,
                last_name: lastName
            }
        )
        res.status(200).json({
            success: true,
            messagge: "user updeted",
            data: userUpdated
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            messagge: "User can't be  updated",
            error: error
        })

    }
}
// DELETE USER
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const userToRemove: any = await User.findOneBy(
            {
                    id: parseInt(userId),
            }
        )
            
            
        const userDeleted = await User.remove(userToRemove)

        res.status(200).json({
            success: true,
            messagge: "user deleteddd",
            data: userDeleted
        })
        

} catch (error) {
    res.status(500).json({
        success: false,
        messagge: "User can't be  deleted",
        error: error

    })

}
}