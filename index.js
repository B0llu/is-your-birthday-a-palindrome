function reversedStr(str) {
    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();

    var reversedStr = reverseListOfChars.join('');

    return reversedStr;
}

console.log(reversedStr('Hello'));