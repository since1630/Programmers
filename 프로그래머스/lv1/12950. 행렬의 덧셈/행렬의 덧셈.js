function solution(arr1, arr2) {
    let result = [];
    let sum_list = [];
      for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[i].length; j++) {
        let first = arr1[i][j];
        let second = arr2[i][j];
        let sum = first + second;
        sum_list.push(sum);
      }
      result.push(sum_list);
      sum_list = [];
    }
    return result;
}