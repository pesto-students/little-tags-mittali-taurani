import axios from 'axios';
export function getAllProducts(){
  return axios.get('http://127.0.0.1:5000/products');
  };