// 1. Corrected from 'redux' to '@reduxjs/toolkit'
// 2. Corrected from 'combinedReducers' to 'combineReducers'
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
   // Your mock state array [1,2,3,4] works perfectly here for testing!
   bookReducer: () => [1, 2, 3, 4]
});