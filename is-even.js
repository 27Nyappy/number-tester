function isEven(Number) {
    if(Number % 2 === 0) {
        return document.getElementById('even');
    }
    if(Number % 2 === 1) {
        return document.getElementById('odd');
    }
}


export default isEven;