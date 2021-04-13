import axios from 'axios';
export function getAllProducts(){
  return axios.get('https://myntrapo.herokuapp.com/products');
  };