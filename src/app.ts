import express from "express";
import dotenv from "dotenv";
import { createService, deleteServiceById, getServices, updateServiceById } from "./controllers/serviceController";
import { login, register } from "./controllers/authController";
import { auth } from "./middlewares/auth";
import { getProfile, getUsers, updateUserById } from "./controllers/userController";
import { createAppointment, getAppointmentById, getMyAppointments, updateAppointmentById } from "./controllers/appointmentController";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";

dotenv.config()

export const app = express()

app.use(express.json())

// PRIMERA RUTA

app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: 'Server is healthy',

        }
    )
})


// AUTH ROUTES:
app.post ('/api/auth/registerregister',register)
app.post ('/api/auth/login', login)

// SERVICES ROUTES:
app.post('/api/services',auth,isSuperAdmin, createService)
app.get('/api/services', getServices)
app.delete('/api/services/:id',auth,isSuperAdmin, deleteServiceById)
app.put('/api/services/:id', auth,isSuperAdmin,updateServiceById)

// USERS ROUTES
app.get('/api/users',auth,isSuperAdmin, getUsers)
app.get ('/api/users/profile',auth,getProfile)
app.put('/api/users/profile',auth, updateUserById)

// APPOINMENTS ROUTES
app.post ('/api/appointments',auth, createAppointment)
app.get ('/api/appointments/:id',auth, getAppointmentById)
app.get ('/api/appointments', auth, getMyAppointments)
app.put('/api/appointments/:id', auth, updateAppointmentById)