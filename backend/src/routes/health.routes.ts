import { Router } from "express";
import {getDbHealth} from "#src/db/health.ts";

const router = Router();

router.get("/", (_req, res) => {
    res.status(200).json({
        status: "ok",
        timestamp: new Date().toISOString(),
    });
});

router.get("/db", async (_req, res)=> {
   const healthy = await getDbHealth();

   res.status(healthy ? 200 : 503).json({
       status: healthy ? "ok" : "error"
   });
});



export default router;