import isEven from './is-even.js';
const input = document.getElementById('input');
const button = document.getElementById('button');
const even = document.getElementById('even');
const odd = document.getElementById('odd');

button.onclick = function() {
    const input = Number(input.value);

    even.textContent = even(input, hiddenEven.classList.remove('hidden'));
    odd.textContet = odd(input, hiddenOdd.classList.remove('hidden')
}