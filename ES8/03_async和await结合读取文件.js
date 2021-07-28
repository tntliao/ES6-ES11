//1.引入fs模块
const fs = require('fs');

//读取 01.txt
function read1() {
    return new Promise((resolve, reject) => {
        fs.readFile('../01_demo.txt', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

//读取 02.txt
function read2() {
    return new Promise((resolve, reject) => {
        fs.readFile('../02_demo.txt', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

//读取 03.txt
function read3() {
    return new Promise((resolve, reject) => {
        fs.readFile('../03_demo.txt', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

//声明一个 async 函数
async function main() {
    let one = await read1();
    let two = await read2();
    let three = await read3();

    console.log(one.toString());
    console.log(two.toString());
    console.log(three.toString());
}

main();