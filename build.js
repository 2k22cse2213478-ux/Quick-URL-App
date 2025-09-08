// build.js
import { build } from "vite";

build()
  .then(() => {
    console.log("✅ Vite build completed successfully");
  })
  .catch((err) => {
    console.error("❌ Vite build failed:", err);
    process.exit(1);
  });
