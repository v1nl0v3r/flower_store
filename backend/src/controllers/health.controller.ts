import type {Request, Response} from 'express';
import * as dbHealthService from '#src/services/dbHealth.service.ts'

export function getHealth(_req: Request, res: Response) {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}

export async function getDbHealth(_req: Request, res: Response){
  const healthy = await dbHealthService.getDbHealth();

  res.status(healthy ? 200 : 503).json({
    status: healthy ? "ok" : "error"
  });
}
