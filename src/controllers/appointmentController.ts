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

// RECUPERAR 1 CITA:


// export const getAppointmentById = async (req: Request, res: Response) => {
//     try {
//         const appoinmentId = req.params.appoinmentId

//         const appoinmentFound = await Appoinment.findOne(
//             // {
//             // where: {
//     //         //     id: appoinmentId as number
//     //         // }
//     // })

//         res.status(200).json({
//             suceess: true,
//             message: "Appointmen retrieved successfully",
//             data: appoinmentFound
//         })
        
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "services cant be retrieved",
//             error: error
//         })
//     }

// }

// RECUPERAR MIS CITAS

export const getMyAppoinments = async (req:Request, res:Response)=> {
    console.log(req.tokenData);
    
    try{
        const userId= req.tokenData.userId

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
        
        

    } catch (error){
        res.status(500).json ({
            success:false,
            message:"apointments can't be retrieved",
        }
    )}
}


// export const updateAppoinment = async (req:Request, res:Response)=> {
//     const selectedAppoinment =await Appoinment.findOne({
//         where: {id:appoinmentId},
//     }

//     )
// }