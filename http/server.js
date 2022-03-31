const http = require('http')

// use an actual html file

http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('<h1>Home Page</h1>')
    }

    if (req.url === '/contact') {
        return res.end('<h1>Contact Page</h1>')
    }

    console.log(req)

    return
}).listen(5000, () => console.log('server running on port 5000'))