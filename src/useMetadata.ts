import { useEffect } from 'react';

interface MetadataConfig {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogType?: string;
  ogImage?: string;
}

export function useMetadata(config: MetadataConfig) {
  const {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
    ogType = 'website',
    ogImage,
  } = config;

  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${selector}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, selector);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', ogTitle, 'property');
    setMeta('og:description', ogDescription, 'property');
    setMeta('og:url', ogUrl, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('twitter:title', ogTitle);
    setMeta('twitter:description', ogDescription);

    let canonicalEl = document.querySelector(`link[rel="canonical"]`);
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical);

    if (ogImage) {
      setMeta('og:image', ogImage, 'property');
      setMeta('og:image:secure_url', ogImage, 'property');
      setMeta('twitter:image', ogImage);
    }
  }, [canonical, description, ogDescription, ogImage, ogTitle, ogType, ogUrl, title]);
}
