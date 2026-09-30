import { access, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] || "out");
const required = [
  "index.html",
  "images/branding/catalina-logo.png",
  "images/food/hero-feast.jpg",
  "images/food/feature-pizza.jpg",
  "images/food/takeout-feast.jpg",
  "images/social/catalina-social.png",
];

for (const file of required) await access(path.join(root, file));

const html = await readFile(path.join(root, "index.html"), "utf8");
const markers = [
  "Catalina Pizza and Chicken",
  "dbe26fc3-bef9-4883-83a6-a3a77ef4bd04",
  "3a150fbf-eeda-4938-977f-76923d2702fb",
  "5147 20 Ave SE",
  "(403) 452-3300",
];

for (const marker of markers) {
  if (!html.includes(marker)) throw new Error(`Missing export marker: ${marker}`);
}

if (/https:\/\/catalinapizzaandchicken\.com\/wp-content\/uploads/i.test(html)) {
  throw new Error("The export still hotlinks a WordPress image.");
}

console.log(`Verified static export at ${root}`);
