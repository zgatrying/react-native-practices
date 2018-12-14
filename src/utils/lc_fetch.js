import axios from 'axios';

const fetch = axios.create({
  baseURL: 'https://openapi.lechange.cn:443/openapi/',
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 3000
});

fetch.interceptors.request.use(config => {
  console.log(config.data)
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

fetch.interceptors.response.use(response => {
  console.log('response', response.data);
  return Promise.resolve(response);
}, error => {
  console.log(error);
  return Promise.reject()
})

export default fetch;
