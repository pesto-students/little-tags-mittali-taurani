import { getAllProducts } from "./backendAPI";

export const formatNumberInCurrency = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(number);
};

export const formatNumberInUSDCurrency = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(number * 0.014);
};

export const getSubString = (inputString, pattern) => {
  return inputString.replace(pattern, "").trim();
}

export const checkInWishList = (id) => {
  const wishList = JSON.parse(window.localStorage.getItem('wishlist'));
  return wishList.find((item) => item.id === id);
};

export const getProductByID = async (id) => {
  const {data} = await getAllProducts();
  return data.find((item) => item.id === id);
};
