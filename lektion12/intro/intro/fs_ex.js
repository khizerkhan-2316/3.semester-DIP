import {readFile} from "fs"
import {fileURLToPath} from 'url';
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const myPath = path.join(__dirname, "path_ex.js")

readFile(myPath, (error, content) => {
    if (error) {
        console.log(error.code)
    } else {
        console.log(content.toString())
    }
})