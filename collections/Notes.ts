import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { slugify } from "../lib/slugify.js";

export const Notes: CollectionConfig = {
  slug: "notes",
  labels: {
    singular: "Note",
    plural: "Notes",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedAt", "_status"],
    description:
      "Notes de marché, observatoires, tribunes — publications éditoriales du cabinet.",
  },
  access: {
    // Public read of *published* notes only — gated in queries via where clause.
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: { interval: 800 },
    },
    maxPerDoc: 20,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 160,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description: "Auto-généré depuis le titre si laissé vide.",
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [
          ({ data, value }) => {
            if (value) return value;
            if (data?.title) return slugify(String(data.title));
            return value;
          },
        ],
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "note-marche",
      admin: { position: "sidebar" },
      options: [
        { label: "Observatoire", value: "observatoire" },
        { label: "Étude sectorielle", value: "etude-sectorielle" },
        { label: "Tribune", value: "tribune" },
        { label: "Mémo méthodologique", value: "memo" },
        { label: "Note de marché", value: "note-marche" },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayOnly", displayFormat: "d MMMM yyyy" },
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      maxLength: 240,
      admin: {
        description: "1 à 2 phrases. Affiché dans les listes et le partage.",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      admin: { description: "Visuel d'accroche (16:9 ou 4:3 recommandé)." },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "body",
      type: "richText",
      required: true,
      editor: lexicalEditor({}),
    },
  ],
};
