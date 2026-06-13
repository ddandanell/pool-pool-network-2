import { useEffect } from "react";

interface HelmetProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SITE_URL = "https://balipoolcleaning.online";
const DEFAULT_OG_IMAGE = "/attached_assets/generated_images/luxury_bali_villa_pool_hero.png";

/**
 * Ensure a meta tag exists in <head> and set its content.
 * Returns the element so callers can set additional attributes.
 */
function ensureMetaTag(attr: string, value: string, content: string): HTMLElement {
  const selector = `meta[${attr}="${value}"]` as const;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  return el;
}

/**
 * Ensure a link tag exists in <head> and set its attributes.
 */
function ensureLinkTag(rel: string, href: string): void {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function Helmet({ title, description, keywords, canonical, ogImage }: HelmetProps) {
  useEffect(() => {
    // Document title
    document.title = title;

    // Standard meta
    ensureMetaTag("name", "description", description);
    if (keywords) {
      ensureMetaTag("name", "keywords", keywords);
    }

    // Open Graph
    ensureMetaTag("property", "og:title", title);
    ensureMetaTag("property", "og:description", description);
    ensureMetaTag("property", "og:type", "website");
    ensureMetaTag("property", "og:site_name", "Bali Pool Pros");
    ensureMetaTag("property", "og:locale", "en_US");

    // OG URL
    const urlPath = canonical || "/";
    const fullUrl = urlPath.startsWith("http") ? urlPath : `${SITE_URL}${urlPath}`;
    ensureMetaTag("property", "og:url", fullUrl);

    // OG Image
    const img = ogImage || DEFAULT_OG_IMAGE;
    const fullImg = img.startsWith("http") ? img : `${SITE_URL}${img}`;
    ensureMetaTag("property", "og:image", fullImg);

    // Twitter Card
    ensureMetaTag("name", "twitter:card", "summary_large_image");
    ensureMetaTag("name", "twitter:title", title);
    ensureMetaTag("name", "twitter:description", description);
    ensureMetaTag("name", "twitter:image", fullImg);

    // Canonical
    ensureLinkTag("canonical", fullUrl);
  }, [title, description, keywords, canonical, ogImage]);

  return null;
}
