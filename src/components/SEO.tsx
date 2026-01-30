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
    // Default to a premium "Cinematic" Unsplash image if no specific image is provided
    const defaultImage = "https://images.unsplash.com/photo-1620641788421-7f1c32637a77?q=80&w=1200&auto=format&fit=crop";

    // Check if image is an absolute URL (starts with http) or a relative path
    const isAbsoluteUrl = image?.startsWith('http');
    const imageUrl = image ? (isAbsoluteUrl ? image : `${siteUrl}${image}`) : defaultImage;

    const seo = {
        title: `${title} | Authentik Studio`,
        description: description,
        image: imageUrl,
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
