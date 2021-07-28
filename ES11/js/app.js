// import * as m1 from './hello.js';
const btn = document.getElementById('btn');
btn.onclick = function () {
    // m1.hello()

    /* import('./hello.js').then(module => {
        module.hello();
    }) */

    import('./hello.js').then(module => {
        module.hello();
    })
}
