export async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).send({ message: "Invalid Token" });

  const parts = authorization?.split(" ");
  if (parts.length != 2)
    return res.status(401).send({ message: "Invalid Token" });

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema))
    return res.status(401).send({ message: "Invalid Token" });

  console.log(authorization);

  next();
}
