module.exports = function reverse (n) {
    const text = n.toString();
    let result = '';
    let i = text.length - 1;
    while(i >= 0){
        if(text[i] === '-'){
        result = `${result}`;
        }
        else{
        result = `${result}${text[i]}`;
    }
        i = i - 1;
    }
    return result * 1;
}
