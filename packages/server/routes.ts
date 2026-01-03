import express from 'express';
import type { Request, Response } from 'express';
import { prisma } from './lib/prisma';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Summarizer API');
});

router.post(
  '/api/products/:id/reviews',
  async (req: Request, res: Response) => {
    const productId = Number(req.params.id);
    const reviews = await prisma.review.findMany({
      where: { productId },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ reviews });
  }
);

export default router;
