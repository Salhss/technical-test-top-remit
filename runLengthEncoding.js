function encode(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}

function decode(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      result += str[i] = str[i - 1].repeat(str[i]);
    }
  }
  return result;
}

function runLengthEncoding(str, code) {
  if (code == "E") {
    return encode(str);
  }
  if (code == "D") {
    return decode(str);
  }
}

console.log(runLengthEncoding("HHHeellloWooorrrrlld!!", "E")); // "H3e2l3W1o3r4l2d1!2"
console.log(runLengthEncoding("H3e2l3W1o3r4l2d1!2", "D")); // "HHHeellloWooorrrrlld!!"
