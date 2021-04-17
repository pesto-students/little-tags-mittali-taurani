import axios from 'axios';

export function getAllProducts(filters){
  return axios.get('https://myntrapo.herokuapp.com/products');
};

export function getMensProducts(searchTearm, filters){
  return axios.get('http://127.0.0.1:5000/products/mens');
};

export function getWomensProducts(searchTearm, filters){
  return axios.get('http://127.0.0.1:5000/products/women');
};

export function getBoysProducts(searchTearm, filters){
  return axios.get('http://127.0.0.1:5000/products/boy');
};


export function getGirlsProducts(searchTearm, filters){
  return axios.get('http://127.0.0.1:5000/products/girl');
};

// export function getSaleProducts(searchTearm, filters){
//   return axios.get('http://127.0.0.1:5000/products/sale');
// };