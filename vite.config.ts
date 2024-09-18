import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
  },
});

function tsConfigPaths(): import("vite").PluginOption {
  throw new Error("Function not implemented.");
}
