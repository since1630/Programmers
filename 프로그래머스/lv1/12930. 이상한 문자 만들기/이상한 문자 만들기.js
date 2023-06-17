function solution(s) {
let lst = [];
let i = 0;
for (val of s) {
  console.log(val);
  if (val !== " ") {
    if (i % 2 === 0) {
      val = val.toUpperCase();
    } else {
      val = val.toLowerCase();
    }
    i++;
  } else {
    i = 0;
  }
  lst.push(val);
}
    return lst.join('');
}