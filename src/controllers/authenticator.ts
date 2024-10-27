import fastify from "fastify";
import { FastifyReply, FastifyRequest } from "fastify";

const loginHandler = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { username, password } = req.body as {
      username: string;
      password: string;
    };

    if (!username || !password) {
      reply.status(400).send({ message: "Missing username or password" });
      return;
    }

    const response = await fetch(`${process.env.BASE_GATEWAY_URL}/login`, {	
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (data.token) {
      reply.setCookie("token", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
    } else {
      reply.status(401).send({ message: "Invalid credentials" });
    }

    reply.send({ message: "Login successful" });
  } catch (error) {
    reply.send(error);
  }
};

export default loginHandler
