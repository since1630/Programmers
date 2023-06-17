function solution(numbers) {
let lst = [];
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    lst.push(numbers[i] + numbers[j]);
  }
}
lst = lst.filter((a, index) => lst.indexOf(a) === index).sort((a, b) => a - b);
    return lst;
}