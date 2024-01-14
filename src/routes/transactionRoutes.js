import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const transactionRouter = Router();

transactionRouter.post(
  "/transaction",
  authMiddleware,
  transactionController.create
);

export default transactionRouter;
