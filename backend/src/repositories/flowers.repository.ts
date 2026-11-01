import { pool } from '#src/db/connection.ts';
import type { Flower } from '#src/models/flower.model.ts';

export async function getFlowers(): Promise<Flower[]>{
  return pool.query("SELECT * FROM flowers");
}