/*import http from 'http';

const PORT = process.env.PORT || 4000;

const server = http.createServer()

server.on('request', (request, response) => {
    switch (request.method) {
        case "GET":
            switch (request.url){

                default:
                    response.statusCode = 400
                    response.write('Cannot get ${request.url')
                    response.end()
            }
            break;
        case "Post":
    }
})

server.listen(PORT, err => {
    err ? console.error(err) : console.log(`listening on port ${PORT}`)
})*/