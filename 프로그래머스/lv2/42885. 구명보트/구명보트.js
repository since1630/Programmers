function solution(people, limit) {
    let cnt = 0;
    let right = 0;
    people.sort((a, b) => a - b);
    while (people.length) {
      right = people.pop();
      if (right + people[0] <= limit) {
        people.splice(0, 1);
      }
      cnt++;
    }
  return cnt;
}