function solution(people, limit) {
    let cnt = 0
    let left = 0;
    let right = people.length - 1;
    people.sort((a,b) => (b-a))
    
    [80,50,40]
    
    while (left <= right) {
      if (people[left] + people[right] <= limit) {
        left++;
        right--;
      } else {
        left++;
      }
      cnt++;
    }
    return cnt
}