const handleRoutes = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.write('<html lang="en">')
        res.write('<head><title>Register</title></head>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html lang="en">')
        res.write('<head><title>Users</title></head>')
        res.write('<body><ul>')
        res.write('<li>User 1</li>')
        res.write('<li>User 2</li>')
        res.write('<li>User 3</li>')
        res.write('<li>User 4</li>')
        res.write('<li>User 5</li>')
        res.write('</ul></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data', chunk => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const username = parsedBody.split('=')[1]
            console.log(username)
            res.statusCode = 302
            res.setHeader('Location', '/greetings')
            return res.end()
        })
    }
    if (url === '/greetings') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html lang="en">')
        res.write('<head><title>Greetings</title></head>')
        res.write('<body><h1>Greetings User!</h1></body>')
        res.write('</html>')
        res.end()
    }
}

module.exports = handleRoutes