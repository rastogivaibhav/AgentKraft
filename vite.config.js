import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 4173,
    },
    build: {
        sourcemap: false,
        minify: "esbuild",
        chunkSizeWarningLimit: 800,
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./src/test/setup.js",
        css: true,
        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            reportsDirectory: "./coverage",
            include: ["src/**/*.{js,jsx}"],
            exclude: ["src/main.jsx", "src/index.css", "src/test/**"],
        },
    },
});
