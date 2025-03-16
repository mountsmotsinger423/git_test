function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const arr = [];
for (let i = 0; i < 10; i++) {
  const randomIndex = getRandomInt(arr.length);
  const randomElement = arr[randomIndex];
  console.log(randomElement);
}
