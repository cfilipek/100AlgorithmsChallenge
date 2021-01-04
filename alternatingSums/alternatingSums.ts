function alternatingSums(a: number[]): number[] {
  let evenSum: number = 0;
  let oddSum: number = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      evenSum += a[i];
    } else {
      oddSum += a[i];
    }
  }

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
