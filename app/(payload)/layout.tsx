import config from "@/payload.config";
import "@payloadcms/next/css";
import {
  RootLayout,
  // @ts-expect-error - importMap is generated at runtime; types catch up after first build
} from "@payloadcms/next/layouts";

import { importMap } from "./admin/importMap.js";

import "./custom.scss";

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap}>
    {children}
  </RootLayout>
);

export default Layout;
