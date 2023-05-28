import { AppDataSource } from "../../data-source";
import { Users } from "../../entity/Users";
import { usersPayload } from "../../utils/users/users.interface"

const usersRepo = AppDataSource.getRepository(Users)
export class UsersModel {

    static createUser = async (payload: usersPayload): Promise<any> => {
        const user = new Users()
        return await usersRepo.save({
            ...payload,
            ...user,
        })
    }
}