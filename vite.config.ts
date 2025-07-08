import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer({ open: false })],
  build: {
    outDir: "build", // default value = 'dist'
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id: string) {
    //         if (id.includes('node_modules')) {
    //           if (id.includes('d3-')) {
    //             return 'd3-related';
    //           }

    //           if (id.includes('recharts')) {
    //             return 'recharts';
    //           }

    //           if (id.includes('recharts-scale')) {
    //             // this doesn't work :(
    //             return 'recharts-scale';
    //           }

    //           if (
    //             id.includes('prop-types') ||
    //             id.includes('react') ||
    //             id.includes('react-') ||
    //             id.includes('scheduler')
    //           ) {
    //             return 'react';
    //           }

    //           return 'other-vendors';
    //         }

    //         return undefined;
    //       },
    //     },
    //   },
  },
  base: "/polityczny-kompas",
  server: {
    watch: {
      ignored: [
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/.git/**",
        "**/*.log",
        "**/temp/**",
      ],
    },
  },
});
