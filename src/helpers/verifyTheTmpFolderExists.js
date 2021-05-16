const fs = require('fs-extra');
const path = require('path');

function verifyTheTmpFolderExists() {
  const tmpPath = path.resolve(__dirname, '..', 'tmp', 'file.txt');

  if (!fs.existsSync(tmpPath)) {
    fs.ensureFileSync(tmpPath);
  }

  if (!fs.readFileSync(tmpPath, 'utf-8')) {
    fs.writeFileSync(tmpPath, '[]');
  }
}

module.exports = verifyTheTmpFolderExists;
