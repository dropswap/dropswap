import { NextSeo } from 'next-seo';

export function SeoMeta() {
  return (
    <NextSeo
      title="DropSwap — Uniswap for 1155s"
      description="Log on, drop in, swap out."
      openGraph={{
        site_name: 'DropSwap',
      }}
      twitter={{
        handle: '@dropswap',
        cardType: 'summary_large_image',
      }}
    />
  );
}
