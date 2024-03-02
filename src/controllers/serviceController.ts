import { Request, Response } from "express"
import { Service } from "../models/Service";


export const createService = async (req: Request, res: Response) => {
    try {

        // recuperar la info a traves del body
        console.log(req.body);
        const serviceName = req.body.serviceName;
        const description = req.body.description

        // validar info

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
