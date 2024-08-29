export const formatNumberWithSpaces = (number: number) => {
  let numStr = number.toString();

  let result = "";
  let count = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
    result = numStr[i] + result;
    count++;
    if (count % 4 === 0 && i !== 0) {
      result = " " + result;
    }
  }

  return result;
};
