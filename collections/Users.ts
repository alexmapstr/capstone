import type { CollectionConfig } from "payload";

/**
 * Authentication collection. Email + password login at /admin.
 * `role` controls access: only "admin" can manage users; "editor" can manage Notes/Authors/Tags.
 */
export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "name", "role"],
  },
  access: {
    // Only admins can read/list/edit users
    read: ({ req: { user } }) => user?.role === "admin",
    create: ({ req: { user } }) => user?.role === "admin",
    update: ({ req: { user } }) => user?.role === "admin",
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Administrateur", value: "admin" },
        { label: "Éditeur", value: "editor" },
      ],
    },
  ],
};
