function getRandomCode() {
  const codes = ["1234", "abcd", "hello", "world"];
  return codes[Math.floor(Math.random() * codes.length)];
}
