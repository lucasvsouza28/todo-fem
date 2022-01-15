import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
// import reactSvgPlugin from "vite-plugin-react-svg";
import svgr from '@honkhonk/vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    //reactSvgPlugin({ defaultExport: "component" })
    svgr()
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
