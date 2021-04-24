import axios from 'axios';
import allProducts from '../data/products.json';
import mensProducts from '../data/mens.json';
import womensProducts from '../data/womens.json';
import boysProducts from '../data/boys.json';
import girlsProducts from '../data/girls.json';

export function getAllProducts(filters){
  return new Promise((resolve, reject)=>{
    resolve({data: allProducts});
  });
};

export function getMensProducts(searchTearm, filters){
  return  new Promise((resolve, reject)=>{
    resolve({data: mensProducts});
  });
};

export function getWomensProducts(searchTearm, filters){
  return  new Promise((resolve, reject)=>{
    resolve({data: womensProducts});
  });
};

export function getBoysProducts(searchTearm, filters){
  return  new Promise((resolve, reject)=>{
    resolve({data: boysProducts});
  });
};


export function getGirlsProducts(searchTearm, filters){
  return  new Promise((resolve, reject)=>{
    resolve({data: girlsProducts});
  });
};
