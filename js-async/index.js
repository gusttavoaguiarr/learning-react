// callbacks > promise > async/await

const fs = require('fs');

console.log(1);

// callback example
// const callback = (err, contents) => {
//     console.log(err, String(contents));
// }
// I/O
// fs.readFile('./js-async/file.txt', callback);

// fs.readFile('./js-async/file.txt', (err, contents) => {
//     fs.readFile('./js-async/file2.txt', (err2, contents2) => {
//         console.log(err, String(contents));
//         console.log(err2, String(contents2));
//     });
// });

// promise
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err);
        } else {
            resolve(contents);
        }
    })
});
// promise
// readFile('./js-async/file.txt')
//     .then(contents => {
//         console.log(String(contents))
//     });

// async/await 

const init = async() => {
    try {
        const contents = await readFile('./js-async/file.txt');
        console.log(String(contents));
    } catch(err) {
        console.log(err);
    }
};

console.log('init', init());

console.log(2);


console.log(3);