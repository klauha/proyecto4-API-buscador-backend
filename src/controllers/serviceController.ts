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

        res.status(201).json({
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
// DELETE SERVICES--------------------------------

export const deleteServiceById = async (req: Request, res: Response) => {
    // / recuperar info por parámetro
    try {
        const serviceId = req.params.id

        const serviceToRemove: any = await Service.findOneBy({
            id: parseInt(serviceId)
        })
        // validar info

        if (!serviceToRemove) {
            res.status(404).json({
                success: false,
                message: "service can't be deleted"
            })
        }

        const serviceDeleted = await Service.delete(serviceToRemove)
        res.status(200).json({
            success: true,
            messagge: "service deleted",
            data: serviceDeleted
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            messagge: "service can't be  deleted",
            error: error

        })

    }
}

// UPDATE SERVICES--------------------------------
export const updateServiceById = async (req: Request, res: Response) => {
    // / recuperar info por parámetro
    try {
        const serviceId = req.params.id
        const serviceName = req.body.serviceName
        const description = req.body.description
        console.log(description);


        const serviceToUpdate: any = await Service.findOneBy({
            id: parseInt(serviceId)
        })
        // validar info

        if (!serviceToUpdate) {
            res.status(404).json({
                success: false,
                message: "service can't be updated"
            })
        }
        // actualizar datos en bd
        const serviceUpdated = await Service.update(

            {
                id: parseInt(serviceId)
            },
            {
                serviceName: serviceName,
                description: description
            },

        )
        res.status(200).json({
            success: true,
            messagge: "service updeted",
            data: serviceUpdated
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            messagge: "service can't be  updated",
            error: error

        })

    }
}