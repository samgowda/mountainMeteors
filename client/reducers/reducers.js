import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth.js'
import listings from './listings.js'

import scraper from './scraper.js';
import surveysResponses from './surveysReducer';
import photoFiles from './photoReducer'
import userPrefs from './userPrefs'
import hasUserInfo from './hasUserInfo';
import demo from './demo';



const rootReducer = combineReducers({
  auth: auth,
  listings: listings,
  photoFiles: photoFiles,

  surveysResponses: surveysResponses,
  scraper: scraper,
  userPrefs: userPrefs,
  hasUserInfo: hasUserInfo,
  demo: demo,
  routing: routerReducer
});


export default rootReducer;
