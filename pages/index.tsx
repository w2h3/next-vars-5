import Head from 'next/head'
import { useLoadScript } from '@react-google-maps/api'
import Map from '../components/map';
import { createClient } from '@vercel/edge-config';

export default function Home() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places']
  })

console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

async function getValues() {
  const secondConfig = createClient(process.env.EDGE_CONFIG);
  const allValues = await secondConfig.getAll();
  console.log(allValues);
}
  
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
