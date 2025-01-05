// external dependencies
import * as contentful from 'contentful'
import { Geist, Geist_Mono } from "next/font/google";
import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';

// internal modules
import { FunnelBuilder } from "@/features/funnel-builder";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getServerSideProps({resolvedUrl}: GetServerSidePropsContext): 
Promise<
  GetServerSidePropsResult<any>
>  {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    environment: process.env.CONTENTFUL_ENVIRONMENT!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const res = await client.getEntries({
    content_type: "funnel",
  });


  const funnelUrl = resolvedUrl.replace('/', '');
  const funnel = res.items
    .filter((entry: any) => entry.sys.contentType.sys.id === 'funnel')
    .map((entry: any) => entry.fields)
    .find((entry: any) => entry.title === funnelUrl);  

  if (!funnel) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      funnel: funnel,
    }
  }
}

export default function Funnel({funnel}: any) {
  const { brand, funnelconfig } = funnel;
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} w-full min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <FunnelBuilder brand={brand} components={funnelconfig} />
    </div>
  );
}