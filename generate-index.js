const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "public", "avatar-parts");

// category map including aliases
const categoryMap = {
  face: "face",
  hair: "hair",
  head: "hair", // <-- important fix
  eyes: "eyes",
  eye: "eyes", // optional alias
  mouth: "mouth",
  accessories: "accessories",
  accesories: "accessories", // common typo
  outfit: "outfit",
  background: "background",
  bg: "background", // optional alias
};

// ensure folders exist
Object.values(categoryMap).forEach((folder) => {
  const folderPath = path.join(basePath, folder);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
});

// move files
fs.readdirSync(basePath).forEach((file) => {
  const filePath = path.join(basePath, file);

  if (fs.lstatSync(filePath).isDirectory()) return;
  if (!file.endsWith(".svg")) return;

  const prefix = file.split("=")[0].trim().toLowerCase();

  const mappedCategory = categoryMap[prefix];

  if (mappedCategory) {
    const destFolder = path.join(basePath, mappedCategory);
    const dest = path.join(destFolder, file);
    fs.renameSync(filePath, dest);
    console.log(`✔ Moved ${file} → ${mappedCategory}`);
  } else {
    console.log(`⚠ Unknown prefix "${prefix}" → ${file}`);
  }
});

// generate index.json
Object.values(categoryMap).forEach((folder) => {
  const folderPath = path.join(basePath, folder);
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith(".svg"));

  fs.writeFileSync(
    path.join(folderPath, "index.json"),
    JSON.stringify(files, null, 2)
  );

  console.log(`✔ index.json for ${folder}`);
});

console.log("\n🎉 DONE — All files sorted and indexed.\n");
