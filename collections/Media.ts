import type { CollectionConfig } from "payload";

/**
 * Uploaded files (cover images, author photos, etc.).
 * Storage is filesystem (./public/media) — switch to S3/Vercel Blob in production
 * via the @payloadcms/storage-* plugins.
 */
export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "public/media",
    mimeTypes: ["image/png", "image/jpeg", "image/webp", "image/svg+xml"],
    imageSizes: [
      { name: "thumb", width: 320, height: 320, crop: "center" },
      { name: "card", width: 800 },
      { name: "feature", width: 1600 },
    ],
  },
  access: {
    read: () => true, // public read for the website
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Texte alternatif (accessibilité)",
    },
  ],
};
