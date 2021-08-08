module.exports = function toReadable (number) {
    if (number == 0) {
        return "zero";
    }
    const numbers = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety", 100: "hundred"};
    let readable = [];
    let hundred = 0;
    let ten = 0;

    if (number >= 100) {
        hundred = Math.floor(number / 100);
        number %= 100;
        console.log(number) 
    }

    if (number >= 20) {
        ten = Math.floor(number / 10) * 10;
        number %= 10;
    }

    if (hundred > 0) {
        readable.push(numbers[hundred]);
        readable.push("hundred");
    }

    if (ten > 0) {
        readable.push(numbers[ten]);
    }

    if (number > 0) {
        readable.push(numbers[number]);
    }
    return readable.join(' ')
}
np
