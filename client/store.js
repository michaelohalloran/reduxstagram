import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import rootReducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create object for default data
//ES6 syntax for posts: posts
const defaultState = {
    posts, 
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;