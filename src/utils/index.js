export const leftPad = (numberString, targetLength) => {
  let output = numberString;

  while (output.length < targetLength) {
    output = "0" + output;
  }
  return output;
};
