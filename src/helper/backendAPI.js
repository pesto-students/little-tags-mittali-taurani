import axios from 'axios';

export function getAllProducts(filters){
  return axios.get('https://myntrapo.herokuapp.com/products');
};

export function getMensProducts(searchTearm, filters){
  return axios.get('https://myntrapo.herokuapp.com/products/mens');
};

export function getWomensProducts(searchTearm, filters){
  return axios.get('https://myntrapo.herokuapp.com/products/women');
};

export function getBoysProducts(searchTearm, filters){
  return axios.get('https://myntrapo.herokuapp.com/products/boys');
};


export function getGirlsProducts(searchTearm, filters){
  return axios.get('https://myntrapo.herokuapp.com/products/girls');
};

// export function getSaleProducts(searchTearm, filters){
//   return axios.get('http://127.0.0.1:5000/products/sale');
// };