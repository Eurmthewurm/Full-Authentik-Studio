import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    article?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, article }) => {
    const siteUrl = 'https://www.authentikstudio.com';
    const seo = {
        title: `${title} | Authentik Studio`,
        description: description,
        image: `${siteUrl}${image || '/favicon.png'}`,
        url: typeof window !== 'undefined' ? window.location.href : siteUrl,
    };

    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <link rel="canonical" href={seo.url} />

            {/* OG Tags */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
        </Helmet>
    );
};

export default SEO;
