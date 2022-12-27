import Head from 'next/head'
import { useLoadScript } from '@react-google-maps/api'
import Map from '../components/map';
import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export default function Home() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places']
  })

console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

export default (req: NextRequest) => {
  const configItems = await getAll();
  return NextResponse.json({
    values: `These are all the values in my Edge Config: ${configItems}`,
  });
};
  
export const config = {
  runtime: 'experimental-edge',
};
  
  if(!isLoaded) return 'Loading';

  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Map />
      </main>
    </>
  )
}
