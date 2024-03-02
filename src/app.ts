import express from "express";
import dotenv from "dotenv";
import { createService, getServices } from "./controllers/serviceController";

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

// RUTAS SERVICES
app.post('/api/services', createService)
app.get('/api/services', getServices)