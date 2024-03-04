import { Request, Response } from "express"
import { Appoinment } from "../models/Appoinment"
import { app } from "../app"

// CREATE APPOINMENT--------------------------

export const createAppoinment = async (req: Request, res: Response) => {
    // Recuperar la info
    try {
        const userId = req.tokenData.userId
        const serviceId = req.body.serviceId
        const appoinmentDate = req.body.appoinmentDate

        if (!serviceId || !appoinmentDate) {
            return res.status(400).json({
                success: false,
                message: "Service ID and date are needed",
            })
        }
        const newAppoinment = await Appoinment.create(
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

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Appoinment can't be created",
            error: error.message
        })
    }
}

// RECUPERAR 1 CITA:


export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.userId
        const appoinmentId = req.params.id

        const appoinmentFound = await Appoinment.findOne(
            {
                where: {
                    id: parseInt(appoinmentId),
                    user: {
                        id: userId
                    }
                },
                relations: {
                    service: true
                }
            }
        )

        if (!appoinmentFound) {
            res.status(404).json(
                {
                    success: false,
                    message: "appoinment not found"
                }
            )
        }

        res.status(200).json({
            suceess: true,
            message: "Appointmen retrieved successfully",
            data: appoinmentFound
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Appoinment cant be retrieved",
            error: error
        })
    }

}

// RECUPERAR MIS CITAS

export const getMyAppoinments = async (req: Request, res: Response) => {
    console.log(req.tokenData);

    try {
        const userId = req.tokenData.userId

        const myAppointments = await Appoinment.find({
            where: {
                user: {
                    id: userId
                }
            },
            relations: {
                user: true,
                service: true
            }
        })

        res.status(200).json(
            {
                success: true,
                message: "Appointments retrieved",
                data: myAppointments
            }
        )



    } catch (error) {
        res.status(500).json({
            success: false,
            message: "apointments can't be retrieved",
        }
        )
    }
}

// MODIFICAR CITA

export const updateAppoinmentById = async (req: Request, res: Response) => {
    try {
        const appoinmentId = req.params.id
        const serviceId = req.body.serviceId
        const appoinmentDate = req.body.appoinmentDate

        const appoinmentToUpdate = await Appoinment.findOne(
            {
                where: {
                    id: parseInt(appoinmentId),
                    user: {
                        id: req.tokenData.userId
                    }
                }
            }
        )

        if(!appoinmentToUpdate) {
            return res.status(404).json({
                success: false,
                messagge: "appointment not found",
            })
        }

        const appointmentUpdated = await Appoinment.update(
            {
                id: parseInt(appoinmentId)
            },
            {
                service: {
                    id: parseInt(serviceId)
                },
                appointmentDate: appoinmentDate
            }
        )
        res.status(200).json({
            success: true,
            messagge: "service updeted",
            data: appointmentUpdated
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            messagge: "Appoinment can't be  updated",
            error: error
        })

    }
}
