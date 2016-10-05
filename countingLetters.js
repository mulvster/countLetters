function countLetters(str) {
  var counter = {};
  for (var i = 0; i < str.length; i++) {
    // Letter doesn't existed before, just count as 1 for now
    if (counter[str[i]] === undefined) {
      counter[str[i]] = 1;
    } else {
      counter[str[i]] += 1;
    }
  }
  return counter;
}
// Preparing the string passed from CL
var userString = process.argv.slice(2).join("");
console.log(countLetters(userString));