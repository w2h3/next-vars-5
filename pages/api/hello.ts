// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/api/hello' };

export async function middleware() {
  const greeting = await get('greeting');
  return NextResponse.json(greeting);
}

type Data = {
  name: string
}
