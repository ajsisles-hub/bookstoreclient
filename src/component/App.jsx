import React from 'react';
import axios from 'axios';
import { baseApiUrl }  from '../config';
import Layout from './layout/Layout';
import BookContainer from './book/BookContainer';



export const App = () => {
console.log('Base API URL:', baseApiUrl);
  axios.get(`${baseApiUrl}/api/v1/books`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });


  // return <div>React App - Hello Ja9</div>;

  return (
  <Layout>
    <BookContainer />
  </Layout>
  );
};

export default App;