const getRandomCode = () => {
  // Generate a random number between 1 and 256
  const randomNumber = Math.floor(Math.random() * 256);

  // Convert the number to a hexadecimal string
  const hexString = randomNumber.toString(16).toUpperCase();

  // Return the code as a string
  return `${hexString}`;
};
