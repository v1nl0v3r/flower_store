import express, {type Express} from 'express'
import healthRoutes from "#src/routes/health.routes.ts";

const app: Express = express();

app.use(express.json());

app.use("/api/health", healthRoutes)

export default app;