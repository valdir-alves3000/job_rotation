function stringReverse(text) {
  var res = "";
  var i = text.length;
  while (i > 0) {
    res += text.substring(i - 1, i);
    i--;
  }
  return res;
}

console.log(stringReverse("valdir"));
