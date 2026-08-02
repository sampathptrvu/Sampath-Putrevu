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
  useEffect(() => {
    document.title = config.title;

    const setMeta = (selector: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${selector}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, selector);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', config.description);
    setMeta('og:title', config.ogTitle, 'property');
    setMeta('og:description', config.ogDescription, 'property');
    setMeta('og:url', config.ogUrl, 'property');
    setMeta('og:type', config.ogType || 'website', 'property');
    setMeta('twitter:title', config.ogTitle);
    setMeta('twitter:description', config.ogDescription);

    let canonicalEl = document.querySelector(`link[rel="canonical"]`);
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', config.canonical);

    if (config.ogImage) {
      setMeta('og:image', config.ogImage, 'property');
      setMeta('og:image:secure_url', config.ogImage, 'property');
      setMeta('twitter:image', config.ogImage);
    }
  }, [config]);}
