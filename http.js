const http = require('http')
const EventEmmiter = require('events')

const PORT = process.env.PORT || 3000;
const emitter = new EventEmmiter();

class Router {
    constructor() {
        this.endpoints = {

        }
    }

    request(method = 'GET', path, handler) {
        if(!this.endpoints[path]) { 
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path];

        if(endpoint[method]) {
            throw new Error(`[${method}] по этому адоесу ${path} уже существует`)
        }

        endpoint[method] = handler;
        emitter.on(`[${path}]:[${method}]`, (req,res) => {
            handler(req,res)
        })
    }

    get(path,handler) {
        this.request('GET',path,handler)
    }
    post(path,handler) {
        this.request('POST',path,handler)
    }
    put(path,handler) {
        this.request('PUT',path,handler)
    }
    delete(path,handler) {
        this.request('DELETE',path,handler)
    }
}

const router = new Router()

router.get('/users', (req,res) => {
    res.end("YOU SEND REQUUES /users")
})

const server = http.createServer((req, res) => {
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
   if(!emitted) {
    res.end('Not found')
   }
   
    // res.writeHead(200, { 
    //     'Content-Type': 'application/json'
    // })
    // if(req.url === '/users') {
    //     return  res.end(JSON.stringify( [
    //         {id: 1, name: 'kwtpub'}
    //     ]))
    // }
    // if(req.url === '/posts') { 
    //     return res.end('POSTS')
    // }
    // res.end(req.url)
})

server.listen(PORT, () => console.log(`server started on PORT ${PORT}`))