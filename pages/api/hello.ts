import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const greeting = await get('greeting');
  res.status(200).json(greeting);
}
