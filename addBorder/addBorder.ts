function addBorder(picture: string[]): string[] {
  const lengthOfWall = picture[0].length + 2;
  let wall = '';

  for (let i = 0; i < lengthOfWall; i++) {
    wall = wall.concat('*');
  }

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[i], '*');
    //concat lets us take in values in order
  }

  return picture;
}

//alternate solution:

function addBorderSecondSolution(picture: string[]): string[] {
  const wall = '*'.repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[i], '*');
    //concat lets us take in values in order
  }

  return picture;
}

console.log(addBorder(['abc', 'ded']));
