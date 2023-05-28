import { AppDataSource } from "../../data-source";
import { Users } from "../../entity/Users";
import { usersPayload } from "../../utils/users/users.interface"
const bcrypt = require('bcrypt')
const usersRepo = AppDataSource.getRepository(Users)
export class UsersModel {

    static createUser = async (payload: usersPayload): Promise<any> => {
        const email = payload.email 
        const foundUser = await usersRepo.findOneBy({
            email
        })
        if(foundUser) {
            console.log(foundUser);
            
            throw new Error('Email Already exists😣 Try Again 🤗')
        }
        else {
            const user = new Users()
            const hashedPassword = await bcrypt.hash(payload.password, 10)
            return await usersRepo.save({
                ...user,
                ...payload,
                password_hash: hashedPassword
            })
        }
        
        
    }
}