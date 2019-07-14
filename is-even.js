function isEven(input) {
    if(input % 2 === 0) {
        return document.getElementById('even');
    }
    if(input % 2 === 1) {
        return document.getElementById('odd');
    }
}


export default isEven;