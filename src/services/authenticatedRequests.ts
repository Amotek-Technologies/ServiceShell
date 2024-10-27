import { FastifyReply, FastifyRequest } from "fastify";

const makeAuthenticatedRequest = async (
  req: FastifyRequest,
  endpoint: string,
  options: RequestInit = {},
  reply: FastifyReply
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
        reply.status(401).send({ message: "Unauthorized" });
    }

    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(`${process.env.BASE_GATEWAY_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      reply.status(response.status).send({ message: response.statusText });
    }

    return await response.json();
  } catch (error: any) {
    reply.status(500).send({ message: error.message });
  }
}

export default makeAuthenticatedRequest;
