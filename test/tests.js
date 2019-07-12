import isEven from '../is-even.js';
const test = QUnit.test;

test('labels num as even/odd', function(assert) {
    const x = 4;
    const y = 2;
    const expected = 'Your number is even.';

    const even = isEven(x, y);

    assert.equal(even, expected);
})