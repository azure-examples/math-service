exports.Add = (num1, num2) => {
  return num1 + num2;
};

exports.Subtract = (num1, num2) => {
  return num1 - num2;
};

exports.Multiply = (factor1, factor2) => {
  return factor1 * factor2;
};

exports.Divide = (dividend, divisor) => {
  if (divisor === 0) throw new Error('Divide by Zero');
  return dividend / divisor;
};
