import app from "./app.ts";
import {config} from "#src/config/env.ts";
import logger from '#src/config/jet-logger-config.ts';

const PORT = Number(config.port) || 3000;

app.listen(PORT, () => {
    logger.imp(`Server started on port ${PORT}`)
});