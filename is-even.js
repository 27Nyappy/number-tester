function isEven(number) {
    if(number % 2 === 0) {
        return 'Your number is even.';
    }
    if(number % 2 === 1) {
        return 'Your number is odd.';
    }
}


export default isEven;