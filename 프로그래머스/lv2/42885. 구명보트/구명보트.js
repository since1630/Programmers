function solution(people, limit) {
    let cnt = 0;
    let arr = people.slice();
    arr.sort((a,b) => (b-a));
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      if (arr[left] + arr[right] <= limit) {
        left++;
        right--;
      } else {
        left++;
      }
      cnt++;
    }
    return cnt;
}