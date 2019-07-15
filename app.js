import isEven from './is-even.js';
const input = document.getElementById('input');
const button = document.getElementById('button');
const even = document.getElementById('even');
const odd = document.getElementById('odd');


button.onclick = function() {
    const par = isEven(Number(input.value));

    if(par === true) {
        even.classList.remove('even');
        odd.classList.add('odd');
    } else {
        even.classList.add('even');
        odd.classList.remove('odd');
    }
};