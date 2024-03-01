import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708965513342 } from "./migrations/1708965513342-roles"
import { Users1708966181208 } from "./migrations/1708966181208-users"
import { Appointments1708967237193 } from "./migrations/1708967237193-appointments"
import { Services1708967708550 } from "./migrations/1708967708550-services"


export const AppDataSource = new DataSource({
type: "mysql",
host:process.env.DB_HOST||"localhost",
port:Number (process.env.DB_PORT||3306),
username: process.env.DB_USER|| "root",
password:process.env.DB_PASSWORD|| "",
database: process.env.DB_DATABASE||"test",
entities: [],
migrations:[
    Roles1708965513342,
    Users1708966181208,
    Services1708967708550,
    Appointments1708967237193
],
synchronize: false,
logging: false,
})