import { Router } from "express";
import * as healthController from "#src/controllers/health.controller.ts"

const healthRouter = Router();

healthRouter.get("/", healthController.getHealth);

healthRouter.get("/db", healthController.getDbHealth)


export default healthRouter;