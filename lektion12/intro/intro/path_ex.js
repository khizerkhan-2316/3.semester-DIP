import path from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("FILENAME " + __filename)
console.log("DIRNAME " + __dirname)

const myPath = path.join(__dirname, "heste", "galop", "hingste")
console.log(myPath)

const parsedPath = path.parse("c:/git/dip/nodesimple/path_ex.js")
console.log(parsedPath)
/*
"C:\Program Files\nodejs\node.exe" C:\Git\dip\lektion13\lektion13\path_ex.js
FILENAME C:\Git\dip\lektion13\lektion13\path_ex.js
DIRNAME C:\Git\dip\lektion13\lektion13
C:\Git\dip\lektion13\lektion13\heste\galop\hingste
{
    root: 'c:/',
        dir: 'c:/git/dip/nodesimple',
    base: 'path_ex.js',
    ext: '.mjs',
    name: 'path_ex'
}
*/