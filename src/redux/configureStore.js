import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Quiz } from './quiz'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            quiz: Quiz
        }),
        applyMiddleware(thunk)
    );

    return store;
}