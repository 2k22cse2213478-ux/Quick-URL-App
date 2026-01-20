// build.js
import { build } from "vite";

async function runBuild() {
  try {
    await build();
    console.log("✅ Vite build completed successfully");
  } catch (err) {
    console.error("❌ Vite build failed:", err);
    process.exit(1);
  }
}

runBuild();
