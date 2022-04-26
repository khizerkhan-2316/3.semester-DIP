import {readdir} from "fs/promises"
import path from "path"
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, "../public")

async function getPublicFiles() {
    try {
        return await readdir(publicPath)
    } catch (error) {
        console.log(error.code)
    }
}

export default getPublicFiles