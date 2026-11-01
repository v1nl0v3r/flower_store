import { z } from "zod"

export const FlowerSchema = z.object({
  flowerId: z.int(),
  name: z.string(),
  price: z.number(),
  quantity: z.int(),
  note: z.string()
})

export type Flower = z.infer<typeof FlowerSchema>