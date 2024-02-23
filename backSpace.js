function backSpace(str) {
  let arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] == "<") {
      arrStr.splice(i - 1, 2);
      i -= 2;
    }
  }
  return arrStr.join("");
}

backSpace("a<bc<"); // b
backSpace("foss<<rritun"); // forritun
backSpace("a<a<a<aa<<"); //
