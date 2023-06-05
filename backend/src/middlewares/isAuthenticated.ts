import { NextFunction, Request, Response, request } from 'express'
import { verify } from "jsonwebtoken"

interface PayLoad {
  sub: string;
}

export function isAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if(!authToken) {
    return response.status(401).end()
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad
    request.user_id = sub
    return next()
  } catch (error) { 
    return response.status(401).end()
  }

}