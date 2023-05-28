import { usersEndpoints } from "../../utils/users/users.enum";
import { userSignupOpts } from "../../schemas/users/users.schema";

const usersRoutes = (fastify, opts, done) => {
    fastify.post(`/auth/${usersEndpoints.REGISTER}`, userSignupOpts)
}

module.exports = usersRoutes