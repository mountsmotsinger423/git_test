const generateRandomCode = () => {
  const code = Math.random().toString(36).substring(2);
  return code;
};
