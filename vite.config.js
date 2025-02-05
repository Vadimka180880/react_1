import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/D:/pagefile.sys', '**/D:/pagefile.sys/**']
    },
    fs: {
      strict: false
    }
  },
  resolve: {
    extensions: [".js", ".jsx"], 
  }
});
