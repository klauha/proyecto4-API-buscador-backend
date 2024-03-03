import { Request, Response } from "express"
import { Appoinment } from "../models/Appoinment"

// CREATE APPOINMENT--------------------------

export const createAppoinment = async (req: Request, res: Response) => {
    // Recuperar la info
    try {
        const userId = req.tokenData.userId
        const serviceId= req.body.serviceId
        const appoinmentDate = req.body.appoinmentDate

        if(!serviceId || !appoinmentDate){
            return res.status(400).json({
                success: false,
                message: "Service ID and date are needed",
            })
        }
        const newAppoinment= await Appoinment.create(
            {
                appointmentDate: appoinmentDate,
                user: {
                    id: userId
                },
                service: {
                    id: serviceId
                }
            }
        ).save()

        res.status(201).json({
            success: true,
            message: "Appoinment created successfully",
            data: newAppoinment
        })

    }catch(error:any){
        res.status(500).json({
        success: false,
        message: "Appoinment can't be created",
        error: error.message
    })}




}