import express from "express";
import dotenv from "dotenv";
import { createService, deleteServiceById, getServices, updateServiceById } from "./controllers/serviceController";
import { login, register } from "./controllers/authController";
import { auth } from "./middlewares/auth";
import { getUsers } from "./controllers/userController";

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
app.post ('/api/register', register)
app.post ('/api/login', login)

// SERVICES ROUTES:
app.post('/api/services', auth, createService)
app.get('/api/services', getServices)
app.delete('/api/services/:id',auth, deleteServiceById)
app.put('/api/services/:id', auth,updateServiceById)

// USERS ROUTES
app.get('/api/users', getUsers)