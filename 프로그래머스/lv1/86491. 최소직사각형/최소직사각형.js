function solution(sizes) {
    let width_list = [];
    let height_list = [];

    for (val of sizes) {
      width_list.push(val[0]);
      height_list.push(val[1]);
    }

    let width = 0;
    // Max를 최대한 줄이는 방향
    for (let i = 0; i < width_list.length; i++) {
      if (width_list[i] < height_list[i]) {
        width = width_list[i];
        width_list[i] = height_list[i];
        height_list[i] = width;
      }
    }
    let width_max = Math.max(...width_list);
    let height_max = Math.max(...height_list);
    return width_max * height_max;
}