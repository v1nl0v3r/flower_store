import mariadb, {type Pool} from "mariadb";
import { config } from "../config/env.ts";

export const pool: Pool = mariadb.createPool({
    ...config.db,
    connectionLimit: 5,
});