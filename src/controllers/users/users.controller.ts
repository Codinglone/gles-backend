import { UsersModel } from "../../models/users/users.model";
const createUserController = async (req, reply) => {
    try {
        const response = await UsersModel.createUser(req.body)
        reply.code(201).send(response)
    } catch (error) {
        reply.code(204).send(error)
    }
}

export {createUserController}