function solution(arr)
{
    let newarr = [];
let i = 0;
while (i < arr.length - 1) {
  let word = arr[i];

  if (newarr.length === 0) newarr.push(word);
  if (word !== arr[i + 1] && arr.length > 0) newarr.push(arr[i + 1]);
  i++;
}
    return newarr;
}