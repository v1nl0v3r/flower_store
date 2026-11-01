import type { Request, Response } from "express";
import * as flowersService from "#src/services/flowers.service.ts"

export async function getFlowers(req: Request, res: Response) {
  const flowers = await flowersService.getFlowers();

  res.status(200).json(flowers);
}
