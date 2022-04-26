import path from 'path'
import http from 'http'
import {readdir, readFile} from "fs/promises"
import {generateHtml, generateLinks} from "./generateHtml.js";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function createServer(port) {
    http.createServer(async (request, response) => {

        if (request.url === '/') {
            let filnavne = await readdir(path.join(__dirname, '../', 'public'));
            let html = generateHtml(() => generateLinks(filnavne));
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
        } else {
            try {
                let sti = path.join(__dirname, '../', 'public', request.url);
                let filData = await readFile(sti);
                response.writeHead(200);
                response.write(filData, 'utf-8');
            } catch (e) {
                response.writeHead(404);
                response.write(e.name + ": " + e.message, 'utf-8');
            }
        }
        response.end();
    }).listen(port, () => {
        console.log(`Lytter på port ${port} ...`)
    });

}

export {createServer}