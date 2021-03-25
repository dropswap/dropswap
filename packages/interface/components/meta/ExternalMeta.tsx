import { GoogleFonts } from 'next-google-fonts';
import Head from 'next/head';

export function ExternalMeta() {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap" />
      <Head>
        {/* preload the woff version of Dr Raymond Display */}
        <link rel="preload" href="/fonts/DR-RAYMOND-Display.woff" as="font" crossOrigin="" />
      </Head>
    </>
  );
}
