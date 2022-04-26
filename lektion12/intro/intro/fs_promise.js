import {readFile} from "fs/promises"
import path from "path"
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const myPath = path.join(__dirname, "path_ex.js")

readFile(myPath)
    .then(content => console.log(content.toString()))
    .catch(error => console.log(error.code))

async function getFile(filePath) {
    try {
        let content = await readFile(myPath)
        console.log(content.toString())
    } catch (error) {
        console.log(error.code)
    }
}

//getFile(mypath)
export default getFile