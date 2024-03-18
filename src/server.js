import express, { json } from "express";
import { connectDb } from "./config/database.js";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import cors from "cors";

const app = express();

connectDb();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(transactionRouter);

const port = normalizePort(process.env.PORT || 3001);
app.listen(port, () => console.log(`Server linstenig in port ${port}`));

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
