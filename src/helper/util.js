export const formatNumberInCurrency = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(number);
};

export const getSubString = (inputString, pattern) => {
  return inputString.replace(pattern,"").trim();
}
