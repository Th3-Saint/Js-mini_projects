const container = document.getElementById('container');
const span = document.getElementById('span');

function colorChnage(){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    const color = `rgb(${red}, ${blue}, ${green})`;
    container.style.background = color;
    span.innerHTML = color.toString();
}