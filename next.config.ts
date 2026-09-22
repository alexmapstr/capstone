import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Indique à Turbopack que la racine du projet est ce dossier, et non le
  // parent qui contient un autre lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
