import { Router } from 'express';
import * as flowersController from "#src/controllers/flowers.controller.ts"

const flowersRouter = Router()

flowersRouter.get("/",  flowersController.getFlowers)

export default flowersRouter;