function solution(s) {
    let map = new Map();
map.set("zero", 0);
map.set("one", 1);
map.set("two", 2);
map.set("three", 3);
map.set("four", 4);
map.set("five", 5);
map.set("six", 6);
map.set("seven", 7);
map.set("eight", 8);
map.set("nine", 9);

function match(word) {
  if (map.has(word)) {
    return map.get(word);
  }
}
if (!s.startsWith("zero") || !s.startsWith("0")) {
  s = s.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/gm, match);
}
    return +s
}