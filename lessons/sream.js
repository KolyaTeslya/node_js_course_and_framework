// Readable - чтение
// Writeable - запись
// Duplex - для чтения и записи Readable + Writeable
// Transform - такой же как Duplex, но может измеенить данные по мере чтения

const fs = require('fs')
const path = require('path')
const e = require("express");

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err){
//         throw err;
//     }
//     console.log(data)
// } )

// const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt'))

// Один чанк по дефолту 64*6
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('end', () => console.log('Закончили читать'))
// stream.on('open', () => console.log('Начали читать'))
// stream.on('error', (e) => console.log(e))

// const writeableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
// for (let i=0; i <20; i++){
//     writeableStream.write(i + '\n');
// }
// writeableStream.end()
// writeableStream.close()
// writeableStream.destroy()
// writeableStream.on('error')

// const http = require('http');
//
// http.createServer((req, res) => {
//     //req - readable stream
//     //res - writable stream
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//
    //стрим закончит читать раньше чем пользователь скачает (неправильно)
    // stream.on('data', chunk => res.write(chunk))
    // stream.on('end', chunk => res.end())

    //Стрим правильный
    // stream.pipe(res)
// })
