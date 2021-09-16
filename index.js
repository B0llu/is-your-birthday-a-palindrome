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
    } else {
    return false;
    }
}

function convertDateToStr(date) {
    var dateStr = { day: '', month: '', year: '' };
    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;
}

var date = {
    day: 15,
    month: 11,
    year: 2020
}

console.log(convertDateToStr(date));