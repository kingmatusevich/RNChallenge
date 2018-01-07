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
    if(!response.ok) {
      throw new Error(response);
    }

    return response.data.message;
  })
};

const getItem = (breedName) => {
  return api
  .get(`/breed/${breedName}/images`)
  .then((response) => {
    console.log(response);
    if(!response.ok) {
      throw new Error(response);
    }
    return response.data.message;
  })
};

export default {
  getItems,
  getItem
};