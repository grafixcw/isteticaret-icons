const AdmZip = require("adm-zip");
const pkg = require("./package.json");

// Archive pre-existing content from output folders
async function createZipArchive() {
  try {
    const zip = new AdmZip();
    zip.addLocalFolder("./public");
    zip.writeZip(`${pkg.name}-${pkg.version}.zip`);
    console.log(`Created zip successfully.`);
  } catch (e) {
    console.log(`Something went wrong. ${e}`);
  }
}

createZipArchive();
