// 1. Corrected from 'redux' to '@reduxjs/toolkit'
// 2. Corrected from 'combinedReducers' to 'combineReducers'
import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './book/bookReducer';
import userReducer from './user/userReducer';


export default combineReducers({
   // Your mock state array [1,2,3,4] works perfectly here for testing!
   bookReducer,
   user: userReducer,
});