import express, {type Express} from 'express'
import apiRouter from '#src/routes/index.ts';
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors())

app.use("/api", apiRouter);

export default app;