export const getRandomNumber = () => {
  const number = Math.floor(Math.random() * (127 - 1) + 1);
  return number;
};
