function almostIncreasingSequence(sequence: number[]): boolean {
  let mistake = 0;
  let numberOrder = sequence[0];

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= numberOrder) {
      mistake += 1;
    }
    numberOrder = sequence[i];
  }

  if (mistake > 1) {
    return false;
  }

  return true;
}

function almostIncreasingSequenceSolutionTwo(sequence: number[]): boolean {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;

      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }

  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));

console.log(almostIncreasingSequenceSolutionTwo([1, 3, 2, 1]));
