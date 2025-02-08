import {
    defineConfig
} from "vite";

export default defineConfig({
   
    build: {
        target: "ES6",
        polyfillDynamicImport: false,
        assetsInclude: 0,
    },
});