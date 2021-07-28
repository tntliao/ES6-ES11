let fs = require('fs');

// fs.readFile('../01_demo.txt', (err, data) => {
//     if (!err) {
//         console.log(data.toString());
//     } else {
//         console.log(err);
//     }
// })

// let p = new Promise(function (resolve, reject) {
//     fs.readFile('../01_demo.txt', function (err, data) {
//         //判断没有成功
//         if (err) reject(err);
//         //如果成功
//         resolve(data);

//         // if (err) {
//         //     reject(err);
//         // } else {
//         //     resolve(data);
//         // }
//     })
// })

// p.then(function (value) {
//     console.log(value.toString());
// }, function (reason) {
//     console.log('读取失败!!!');
// })






let p2 = new Promise(function (reslove, reject) {
    fs.readFile('../01_demo.txt', function (err, data) {
        if (err) {
            reject(err);
        } else {
            reslove(data);
        }
    })
})

p2.then(function(value) {
    console.log(value.toString());
},function (reason) {
    console.log('错误');
})