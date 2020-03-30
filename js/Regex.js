// This a medium challenge exercise from Edabit.com
// To do this I followed resource link
// https://javascript.info/regexp-character-sets-and-ranges

const REGEXP = /x[A-F\d]{2}/g
alert ("Exeption 0xAF".match(/x[A-F\d]{2}/g));
alert ("Exeption 0xD3".match(/x[A-F\d]{2}/g));
alert ("Exeption 0xd3".match(/x[A-F\d]{2}/g));
alert ("Exeption 0xZZ".match(/x[A-F\d]{2}/g));