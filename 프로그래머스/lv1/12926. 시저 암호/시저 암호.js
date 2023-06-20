function solution(s, n) {
  let str = "";
  const arr = s.split("");
  arr.forEach((a) => {
    let word = a.charCodeAt(0);
    // console.log(word);
      
    // 1.word가 공백을 포함한 기타 문자인 경우
    if (
      word === 32 ||
      (word > 32 && word <= 64) ||
      (word >= 91 && word <= 96)
    ) {
      str += String.fromCharCode(word);
    }
    // 2.word가 대문자인 경우
    else if (word >= 65 && word <= 90) {
      word += n;
      if (word > 90) {
        word = word - 26;
      }
      str += String.fromCharCode(word);
    }
    // 3.word가 소문자인 경우
    else if (word >= 97 && word <= 122) {
      word += n;
      if (word > 122) {
        word = word - 26;
      }
      str += String.fromCharCode(word);
    }
  });

//   if (str.indexOf("!")) {
//     str = str.replace(/!/gm, " ");
//   }
  return str;
}