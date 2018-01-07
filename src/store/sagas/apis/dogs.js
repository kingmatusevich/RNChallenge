import {create} from 'apisauce';
const api = create({
  baseURL: 'https://dog.ceo/api',
  headers: {'Accept': 'application/json'}
})

const getItems = () => {
  return api
  .get('/breeds/list')
  .then((response) => {
    console.log(response);
    return response.data.message;
  })
};

const getItem = (breedName) => {
  return api
  .get(`/breeds/${breedName}/list`)
  .then((response) => {
    console.log(response);
    return response.data.message;
  })
};

export default {
  getItems,
  getItem
};