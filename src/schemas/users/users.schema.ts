import { Type as T } from "@sinclair/typebox";
import { createUserController } from "../../controllers/users/users.controller";

const userSignupSchema = T.Object({
    firstName: T.String(),
    lastName: T.String(),
    email: T.String(),
    phone: T.String(),
    password: T.String(),
    address: T.String(),
    role: T.String(),
})

const getUserSchema = T.Object({
    id: T.String(),
    firstName: T.String(),
    lastName: T.String(),
    email: T.String(),
    phone: T.String(),
    address: T.String(),
    role: T.String(),
    created_at: T.String(),
    updated_at: T.String(),
})

const userSignupOpts = {
    schema: {
        body: T.Strict(userSignupSchema),
        response: {
            201: getUserSchema
        }
    },
    handler: createUserController
}

export { userSignupOpts }