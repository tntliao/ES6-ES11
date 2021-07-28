let fs = require('fs');


// fs.readFile('../01_demo.txt', function (err, data1) {
//     if (!err) {
//         fs.readFile('../02_demo.txt', function (err, data2) {
//             if (!err) {
//                 fs.readFile('../03_demo.txt', function (err, data3) {
//                     if (!err) {
//                         console.log(data1 + data2 + data3);
//                     }
//                 })
//             }
//         })
//     }
// })

function p1() {
    let p = new Promise(function (resolve, reject) {
        fs.readFile('../01_demo.txt', function (err, data) {
            if (!err) {
                resolve(data);
            } else {
                console.log(err);
            }
        })
    })

    p.then(value => {
        return new Promise(function (resolve, reject) {
            fs.readFile('../02_demo.txt', function (err, data) {
                if (!err) {
                    resolve([value, data]);
                }
            })
        })
    }).then(value => {
        return new Promise(function (resolve, reject) {
            fs.readFile('../03_demo.txt', function (err, data) {
                if (!err) {
                    value.push(data);
                    resolve(value);
                }
            })
        })
    }).then(value => {
        console.log(value.join('\r\n'));
    })
}


let p = new Promise(function (resolve, reject) {
    fs.readFile('../01_demo.txt', (err, data) => {
        console.log(data);
        resolve(data);
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../02_demo.txt', (err, data) => {
            resolve([value, data]);
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../03_demo.txt', (err, data) => {
            value.push(data);
            resolve(value);
        })
    })
}).then(value => {
    let str = value.join('\r\n')
    console.log(str);
})