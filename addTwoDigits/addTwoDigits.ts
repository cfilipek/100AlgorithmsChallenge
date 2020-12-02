function addTwoDigits(n: any): number {
  let finalNum = 0;
  let numArray = n.toString().split('');
  for (let i = 0; i < numArray.length; i++) {
    finalNum += parseInt(numArray[i]);
  }

  return finalNum;
}

function addTwoDigitsAltSolution(n: any): number {
  const nums = n.toString().split('');

  return nums.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(29));
console.log(addTwoDigitsAltSolution(29));

/*
**Hint**
-   split()
-   parseInt()
-   toString()
-   reduce()
*/
