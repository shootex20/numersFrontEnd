import { Numbers } from '../models/numbers';
const axios = require('axios');


export const fetchAddition = () => {
  axios.post(process.env.API_HOST + '/addition')
    .then(function (response: Numbers) {
      return response;
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}