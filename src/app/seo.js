export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : null;

export const getCanonicalUrl = (path) =>
  siteUrl ? new URL(path, siteUrl).toString() : undefined;

export const serializeJsonLd = (value) =>
  JSON.stringify(value).replace(/</g, "\\u003c");
