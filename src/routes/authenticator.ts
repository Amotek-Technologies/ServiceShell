import { FastifyInstance } from 'fastify';
import loginHandler from '../controllers/authenticator';



const loginSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' }
  },
  required: ["username", "password"]
};

function loginRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: 'POST',
    url: '/login',
    schema: {
      body: loginSchema,
      response: {
        200: { type: 'object', properties: { token: { type: 'string' } } },
      }
    },
    handler: loginHandler,
  })
}

export { loginRoutes }