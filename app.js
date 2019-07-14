import isEven from './is-even.js';
const input = document.getElementById('input');
const button = document.getElementById('button');
const even = document.getElementsByClassName('hiddenEven');
const odd = document.getElementsByClassName('hiddenOdd');


button.onclick = function() {
    const par = Number(input.value);

    if(par === even) {
        even.classList.remove('hidden');
        even.textContent = isEven(even);
    }
    if(par === odd) {
        odd.classList.remove('hidden');
        odd.textContent = isEven(odd);
    }

};