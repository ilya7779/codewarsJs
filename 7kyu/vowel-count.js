function getCount(str) {
    let result = 0;
    let arrLetters = str.split('');
    for (let i = 0; i < arrLetters.length; i++) {
        if (arrLetters[i] === 'a' || arrLetters[i] === 'e' || arrLetters[i] === 'i' ||
            arrLetters[i] === 'o' || arrLetters[i] === 'u') {
            result = result + 1;
        }
    }
    return result;
}