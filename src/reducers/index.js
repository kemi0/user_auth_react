import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import movieReducer from './movie_reducer';

const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer,
    movie: movieReducer
});

export default rootReducer;
