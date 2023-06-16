function solution(participant, completion) {
    let result = {};
    for (let i = 0; i < participant.length; i++) {
      result[participant[i]] = (result[participant[i]] || 0) + 1;
    }
    for (let j = 0; j < completion.length; j++) {
      if (completion[j] in result) {
        result[completion[j]]--;
      }
    }

    for (values of Object.entries(result)) {
      if (values[1]) return (values[0]);
    }

}