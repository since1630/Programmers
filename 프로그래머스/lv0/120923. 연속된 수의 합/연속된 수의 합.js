function solution(num, total) {
    let standard = 0;
    let arr;
    let arr_sum;
    while (arr_sum !== total) {
      arr = new Array(num).fill(1).map((_, i) => i + standard);
      arr_sum = arr.reduce((acc, cur) => acc + cur, 0);
        if (arr_sum < total){
        standard++;     
        }
        else{
            standard--;
        }
      
    }
    return arr;
}