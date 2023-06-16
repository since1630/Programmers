function solution(s) {
  const test = /^\d+$/.test(s);
  if (s.length === 4 || s.length === 6) {
    return test ? true : false;
  }
  return false;
}