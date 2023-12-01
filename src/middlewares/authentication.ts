import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { UnauthorizedError } from '../entities/errors/unauthorized';

export class AuthMiddleware {
  constructor(private auth: any) {
    this.auth = process.env.PUBLIC_KEY;
  }

  public verifyToken(req: Request | any, res: Response, next: NextFunction): any {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return next(new UnauthorizedError("No token provided"))

    const parts = authHeader.split(" ");

    if (!(parts.length === 2))
      return next(new UnauthorizedError("Token parts error"))

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
      return next(new UnauthorizedError("Token malformatted"))

    jwt.verify(token, this.auth, (err: any, decoded: any) => {
      if (err) return res.status(401).send({ error: "Token invalid" });
      req.userId = (decoded as { id: string }).id;
      return next();
    });
  }
};
