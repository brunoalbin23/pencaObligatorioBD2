export const jwt = require('jsonwebtoken');

export function generateAccessToken(usuario: string) {
    return jwt.sign({ usuario: usuario }, 'miClaveSecreta', { expiresIn: '1h' });
}

//Una vez otorgado el JWT con esto compurebo que lo tenga
export function authenticate(req: any, res: any, next: any) {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
      return res.status(401).send({ message: "Unauthorized" });
  } else {
      const token: string = authorizationHeader.split(' ')[1];
      try {
          jwt.verify(token, 'shhhhh');
          next();
      } catch (err: any) {
          if (err.name === 'TokenExpiredError') {
              res.status(401).send({ message: "TokenExpiredError" });
          } else {
              const error = new Error("Error! Something went wrong.");
              return next(error);
          }
      }
  }
}