import {pool} from "#src/db/connection.ts";

export async function getDbHealth(): Promise<boolean> {
    try {
        await pool.query("SELECT 1");
        return true;
    } catch {
        return false;
    }
}
