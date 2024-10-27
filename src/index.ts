import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'
import { loginRoutes } from './routes/authenticator'

require('dotenv').config()

const server = fastify()

server.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
    hook: 'onRequest', 
  })

server.register(loginRoutes)

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})