function solution(phone_number) {
    const lst = phone_number.slice(-4);
    let star = "";
    for (let i = 0; i < phone_number.length - 4; i++) {
      star += "*";
    }
    star += lst;
    return star;
}