function allLongestStrings(inputArray: string[]): string[] {
  let arrayLength = 0;
  let arrayOfStrings = [];

  for (let i = 0; i < inputArray.length; i++) {
    let stringLength = inputArray[i].length;

    arrayLength = stringLength > arrayLength ? stringLength : arrayLength;
  }

  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === arrayLength) {
      arrayOfStrings.push(inputArray[j]);
    }
  }

  return arrayOfStrings;
}

function allLongestStringsSolutiontwo(inputArray: string[]): string[] {
  let longestLength = 0;
  const longestWords = [];

  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach((word: string) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
console.log(allLongestStringsSolutiontwo(['aba', 'aa', 'ad', 'vcd', 'aba']));
