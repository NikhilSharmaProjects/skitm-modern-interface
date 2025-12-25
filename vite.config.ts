import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";

// Optional: Example of a simple custom tagger plugin
function skitmTagger() {
    return {
        name: "skitm-tagger",
        transform(code: string, id: string) {
            // This is a naive example: you can improve this for your needs
            // It adds data-skitm-id to className in JSX
            return code.replace(/className="([^"]+)"/g, (match: string, p1: string) => {
                return `className="${p1}" data-skitm-id="${p1}"`;
            });
        },
    };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    server: {
        host: "::",
        port: 8080,
    },
    plugins: [
        react(),
        // mode === 'development' && componentTagger(), // Removed -tagger
        mode === "development" && skitmTagger(), // Use custom tagger if desired
        mode === "production" &&
            compression({
                algorithm: "gzip",
                ext: ".gz",
            }),
        mode === "production" &&
            compression({
                algorithm: "brotliCompress",
                ext: ".br",
            }),
    ].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        minify: "terser",
        cssMinify: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
            },
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],
                    router: ["react-router-dom"],
                    ui: [
                        "@radix-ui/react-dialog",
                        "@radix-ui/react-dropdown-menu",
                    ],
                },
            },
        },
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
}));
