import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, './src');

function getFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.reduce((entryPoints, file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      return [...entryPoints, ...getFiles(filePath)];
    } else if (file.endsWith('.ts')) {
      return [...entryPoints, filePath];
    }
    return entryPoints;
  }, []);
}

const entryPoints = getFiles(srcDir);
export default entryPoints;