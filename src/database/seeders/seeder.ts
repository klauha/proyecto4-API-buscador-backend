import { User } from "../../models/User"
import { AppDataSource } from "../db"
// import bcrypt
const userSeedDatabase = async()=>{
    try {
        await AppDataSource.initialize()
        const userAdmin =new User()
        userAdmin.first_name = "admin"
        userAdmin.last_name = ""




    }catch{}
}
