import isEven from '../is-even.js';
const test = QUnit.test;

test('labels num as even', function(assert) {
    const x = 4;
    const y = 2;
    const expected = document.getElementById('even');

    const even = isEven(x, y);

    assert.equal(even, expected);
});

test('labels num as odd', function(assert) {
    const x = 5;
    const y = 2;
    const expected = document.getElementById('odd');

    const even = isEven(x, y);

    assert.equal(even, expected);
});