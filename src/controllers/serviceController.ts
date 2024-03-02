import { Request, Response } from "express"
import { Service } from "../models/Service";
import { error } from "console";
// CREATE SERVICE--------------------------------
export const createService = async (req: Request, res: Response) => {
    try {

        // recuperar la info a traves del body
        console.log(req.body);
        const serviceName = req.body.serviceName;
        const description = req.body.description

        // validar info
        if (!serviceName || !description) {
            return res.status(400).json({
                success: false,
                message: "Service name and description are needed",
                error: error
            })
        }

        // guardar info

        const newService = await Service.create(
            {
                serviceName: serviceName,
                description: description
            }
        ).save()

        res.status(200).json({
            success: true,
            message: "service created successfully",
            data: newService
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Service can't be created",
            error: error
        })
    }
}

// GET SERVICES--------------------------------

export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.find(
            {
                select: {
                    id: true,
                    serviceName: true,
                    description: true,
                    createdAt: true,
                    updatedAt: true,
                }
            }
        )
        res.status(200).json({
            suceess: true,
            message: "services retrieved successfully",
            data: services

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "services cant be retrieved",
            error: error
        })
    }

}