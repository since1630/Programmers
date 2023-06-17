function solution(n) {
    let three_deci = n.toString(3);
    let revers_three_deci = "";
    for (let i = three_deci.length - 1; i >= 0; i--) {
      revers_three_deci += three_deci[i];
    }
    return parseInt(revers_three_deci, 3);
}