const os = require('os')
const cluster = require('cluster')

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if(cluster.isPrimary) {
//     for(let i = 0; i < os.cpus().length ; i++) {
//         cluster.fork()
//     }
//     cluster.on('exit', (worker) => {
//         console.log( `${process.pid} умер `)
//         if(code ===)
//         cluster.fork()
//     })
// }   else {
//     console.log(`Воркер с pid= ${process.pid} запущен `)

//     setInterval(() => {
//         console.log(`Воркер с pid= ${process.pid} еще работает`)
//     }, 5000)
// }




