function solution(board) {
    const before_board_sum = board.length * board.length;

    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    const new_board = JSON.parse(JSON.stringify(board));

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === 0) continue;
        for (let k = 0; k < 8; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];

          if (nx < 0 || nx >= board.length || ny < 0 || ny >= board.length)
            continue;
          new_board[nx][ny] = 1;
        }
      }
    }
    // console.log(new_board);
    let after_board_sum = new_board.reduce(
      (acc, cur) =>
        acc +
        cur.reduce((acc, cur) => {
          return acc + cur}, 0
        ),
      0
    );
    return before_board_sum - after_board_sum;
}