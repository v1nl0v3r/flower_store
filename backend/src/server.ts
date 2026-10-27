import app from "./app.ts";
import {config} from "#src/config/env.ts";

const PORT = Number(config.port) || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});