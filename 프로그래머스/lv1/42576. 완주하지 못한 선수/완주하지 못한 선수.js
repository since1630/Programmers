function solution(participant, completion) {
  const result = new Map();
  for (let i = 0; i < participant.length; i++) {
    result.set(participant[i], (result.get(participant[i]) || 0) + 1);
  }

  for (let j = 0; j < completion.length; j++) {
    if (result.has(completion[j])) {
      result.set(completion[j], result.get(completion[j]) - 1);
    }
  }
  for (let vals of result) {
    if (vals[1]) return vals[0];
  }
}