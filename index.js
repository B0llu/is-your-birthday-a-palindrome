function reversedStr(str) {
    // var listOfChars = str.split('');
    // var reverseListOfChars = listOfChars.reverse();
    // var reversedStr = reverseListOfChars.join('');
    // return reversedStr;

    return str.split('').reverse().join('')
}

function isPalindrome(str) {
    var reverse = reversedStr(str);
    if ( str === reverse) {
        return true;
    } else 
    return false;
}

