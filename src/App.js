import React from 'react';
import axios from 'axios';
import { baseApiUrl }  from './config';



export const App = () => {
console.log('Base API URL:', baseApiUrl);
  axios.get(`${baseApiUrl}/api/v1/books`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });


  return <div>React App - Hello Ja9</div>;
};

export default App;