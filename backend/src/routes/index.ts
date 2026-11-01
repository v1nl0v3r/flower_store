import { Router } from 'express';
import flowersRouter from './flowers.routes.ts';
import healthRoutes from '#src/routes/health.routes.ts';

const apiRouter = Router();

apiRouter.use('/flowers', flowersRouter);
apiRouter.use('/health', healthRoutes)
export default apiRouter;
