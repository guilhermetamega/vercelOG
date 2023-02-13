// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head } from "next/document";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://vercel-og-eight.vercel.app/api/og"
        />
      </Head>
    </>
  );
}
