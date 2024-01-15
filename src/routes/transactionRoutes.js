import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validationSchemaMiddleware } from "../middleware/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post(
  "/transactions",
  validationSchemaMiddleware(CreateTransaction),
  transactionController.create
);

transactionRouter.get("/transactions", transactionController.findAllByUser);
transactionRouter.patch("/transactions/:id", transactionController.update);
export default transactionRouter;
