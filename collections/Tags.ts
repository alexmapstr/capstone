import type { CollectionConfig } from "payload";
import { slugify } from "../lib/slugify.js";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "Auto-généré depuis le nom si laissé vide.",
      },
      hooks: {
        beforeValidate: [
          ({ data, value }) => {
            if (value) return value;
            if (data?.name) return slugify(String(data.name));
            return value;
          },
        ],
      },
    },
  ],
};
