import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    reporters: ["html", "default"],
    outputFile: "./test-report/index.html",
  },
});
