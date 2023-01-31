import { json } from "react-router-dom";

const api = "http://localhost:8080/php-test";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const add = (product) =>
  fetch(`${api}/api/new`, {
    method: 'POST',
    mode: 'no-cors',
    body: product,
     })
     .then((res) => res)

export const remove = (skus) =>
  fetch(`${api}/api/delete`, { 
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(skus),
     })


  export const getAll = () =>
  fetch(`${api}/`, { headers })
    .then((res) => res.json())
    .then((data) =>Object.keys(data).map((key) =>  data[key]))