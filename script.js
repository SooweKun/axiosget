import axios from 'axios';

function getData(endpoints) {
  const requests = endpoints.map(endpoint => axios.get(endpoint));

  axios.all(requests)
    .then(axios.spread((...responses) => {
      responses.forEach((response, index) => {
        console.log(`Data from request ${index + 1}:`, response.data);
      });
    }))
    .catch(errors => {
      console.error('Error fetching data:', errors);
    });
  
}

  const urls = [
    'https://jsonplaceholder.typicode.com/posts?_limit=2', //obj1
    'https://jsonplaceholder.typicode.com/todos?_limit=2'  //obj2
];
  
getData(urls);