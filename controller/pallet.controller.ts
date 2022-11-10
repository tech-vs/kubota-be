import { Request, Response } from 'express'
import { prisma } from '../app'
/**
 * GET /
 * Home page.
 */
type palletBody = {
  palletNo: string
  part1: string
  part2: string
  part3: string
  part4: string
  part5: string
  status: string
}
export const pallet = async (req: Request, res: Response): Promise<void> => {
  let result = await prisma.pallet.findMany()
  res.json(result)
}
