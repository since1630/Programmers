function solution(lottos, win_nums) {
    let rank = 6;
    let zero_cnt = 0;
    let correct_cnt = 0;
    // let min_rank = rank;
    // 기본 랭크를 6으로 잡고 맞을때마다 -1 씩 한다.
    lottos.sort((a, b) => a - b);
    win_nums.sort((a, b) => a - b);

    for (let i = 0; i < lottos.length; i++) {
      if (win_nums.indexOf(lottos[i]) !== -1) {
        correct_cnt++;
        if (correct_cnt > 1) {
          rank--;
          win_nums.splice(win_nums.indexOf(lottos[i]), 1);
        }
      }
      if (lottos[i] === 0) {
        zero_cnt++;
      }
    }
let max_rank =
  zero_cnt === 6 ? 1 : zero_cnt === 0 && rank === 6 ? 6 : rank - zero_cnt;
    let min_rank = correct_cnt < 1 ? 6 : rank;
    return [max_rank,min_rank];
}