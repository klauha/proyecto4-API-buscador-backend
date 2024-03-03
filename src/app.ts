import express from "express";
import dotenv from "dotenv";
import { createService, deleteServiceById, getServices, updateServiceById } from "./controllers/serviceController";
import { login, register } from "./controllers/auth";

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
app.post('/api/services', createService)
app.get('/api/services', getServices)
app.delete('/api/services/:id', deleteServiceById)
app.put('/api/services/:id', updateServiceById)