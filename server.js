const express = require('express');
const path = require('path');
const app = express();
const port = 5500

const routes = express.Router()

app.use(express.static("Public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'index.html'));
})

app.get("/twitter", (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'twitter.html'));
})

routes.get("/audience", (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'audience.html'));
})

routes.get("/comments", (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'comments.html'));
})

routes.get("/revenue", (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', "revenue.html"));
})

routes.get("/interactions", (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'likes.html'));
})

app.use("/twitter", routes)

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})

// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// function serveFile(res, filePath, contentType) {
//     const fullPath = path.join(__dirname, filePath)
//     fs.readFile(fullPath, (err, data) => {
//         if (err) {
//             res.writeHead(500)
//             res.end("Server Error")
//         } else {
//             res.writeHead(200, {'Content-Type': contentType })
//             res.end(data)
//         }
//     })
// }

// function getContentType(ext) {
//     switch (ext) {
//         case ".html": return "text/html"
//         case ".css": return "text/css"
//         case ".js": return "application/javascript"
//         case ".png": return "image/png"
//         case ".jpg": return "image/jpeg"
//         case ".jpeg": return "image/jpeg"
//     }
// }

// const server = http.createServer(function(req, res) {
//     if (req.url === "/") {
//         serveFile(res, 'index.html', 'text/html');
//     } else if (req.url === '/twitter') {
//         serveFile(res, 'twitter.html', 'text/html');
//     } else if (req.url.startsWith('/Public')) {
//         const filePath = path.join(__dirname, req.url)
//         const ext = path.extname(filePath)
//         const contentType = getContentType(ext)
//         serveFile(res, filePath, contentType)
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         res.end("<h1>File Not Found</h1>")
//     } 
// })

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });