// src/components/seo/SEO.tsx
import { NextSeo, NextSeoProps } from 'next-seo';

interface SEOProps extends NextSeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  noIndex = false,
  ...rest
}: SEOProps) {
  const siteName = 'DesignPOV';
  const defaultDescription =
    'We build exceptional digital experiences — strategy, design, and engineering under one roof.';
  const defaultOgImage = '/images/og-default.jpg';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designpov.com';

  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || defaultDescription;
  const ogImageUrl = ogImage
    ? `${baseUrl}${ogImage}`
    : `${baseUrl}${defaultOgImage}`;

  return (
    <NextSeo
      title={fullTitle}
      description={metaDescription}
      canonical={canonical ? `${baseUrl}${canonical}` : undefined}
      noindex={noIndex}
      nofollow={noIndex}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: canonical ? `${baseUrl}${canonical}` : baseUrl,
        siteName,
        title: fullTitle,
        description: metaDescription,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: fullTitle,
          },
        ],
      }}
      twitter={{
        handle: '@DesignPOV',
        site: '@DesignPOV',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f0f0f' },
      ]}
      {...rest}
    />
  );
}
