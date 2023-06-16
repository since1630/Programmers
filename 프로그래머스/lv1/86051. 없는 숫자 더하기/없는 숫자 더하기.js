function solution(numbers) {
    let lst = [];
    for (let i = 0; i < 10; i++) {
      if (!numbers.includes(i)) lst.push(i);
    }
    return lst.reduce((acc, cur) => acc + cur, 0)
}