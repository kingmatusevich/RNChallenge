import {create} from 'apisauce';
const api = create({
  baseURL: 'https://api.punkapi.com/v2',
  headers: {'Accept': 'application/json'}
})

const getItems = () => {
  return api
  .get('/beers')
  .then((response) => {
    console.log(response);
    if(!response.ok) {
      throw new Error(response);
    }

    return response.data;
  })
};

const getItem = (breedId) => {
  return api
  .get(`/beers/${breedId}`)
  .then((response) => {
    console.log(response);
    if(!response.ok) {
      throw new Error(response);
    }
    return response.data[0];
  })
};

export default {
  getItems,
  getItem
};