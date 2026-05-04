import type { CollectionConfig } from "payload";

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role"],
  },
  access: {
    read: () => true, // public — used to display author info on /notes
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      label: "Fonction (ex : Associé, Senior consultant)",
    },
    {
      name: "bio",
      type: "textarea",
      maxLength: 600,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
    },
  ],
};
