const fs = require('fs')

const path = require('path')

// fs.readFile(path.resolve(__dirname, 'text.txt'), (err, data) => { 
//     if(err) {
//         throw err
//     }
//     console.log(data)
// })




// // один чанк по дефолту 64кб
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

// stream.on('end', () => console.log('чтение файла закончено'))

// stream.on('open', () => console.log('файл открыт'))

// stream.on('error', (e) => console.log(e))

// const http = require('http')

// const writebleStream = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'))
// for(let i = 0; i < 20; i++) {
// writebleStream.write(i + '\n')
// }

// writebleStream.end()

// http.createServer((req,rws) => {
//     //req - readeble stream 
//     //res - writeble stream
//     const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'))

//     // стрим закончит читать файл, раньше чем пользователь скачает
//     // stream.on('data', chunk => resizeBy.write(chunk))
//     // stream.on('end', chunk => res.end(chunk))
//     stream.pipe(res)
// })