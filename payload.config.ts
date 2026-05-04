import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./collections/Users.js";
import { Media } from "./collections/Media.js";
import { Authors } from "./collections/Authors.js";
import { Tags } from "./collections/Tags.js";
import { Notes } from "./collections/Notes.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " — Capstone Backoffice",
    },
  },
  editor: lexicalEditor({}),
  collections: [Users, Media, Authors, Tags, Notes],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  // Localization could be added later (FR + EN). Keeping FR-only for now.
});
