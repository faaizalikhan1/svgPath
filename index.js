let ip = document.getElementById('path');
let btn = document.getElementById('submit');
let op = document.getElementById('output-area');
let str;
let mainPath;


ip.addEventListener('change', function () {
    op.innerHTML = ip.value;
})

btn.addEventListener('click', function () {
    start();
})


function start() {
    mainPath = document.querySelector('path');
    str = mainPath.getTotalLength();
    console.log(str);
    getLength(str);
}




function getLength(g) {
    document.getElementById('outputtwo').innerHTML = `Length of the svg path: ${g}`;
}