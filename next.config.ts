import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // Tell Turbopack the workspace root is THIS folder, not the parent that has another lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default withPayload(nextConfig);
