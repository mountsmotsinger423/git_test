function getRandomCode() {
  const codes = ['ABC', 'XYZ', '123', '456'];
  return codes[Math.floor(Math.random() * codes.length)];
}
