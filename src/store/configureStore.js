import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createWrapper} from 'next-redux-wrapper';
import TodosReducer from "../reducers/todosReducer";



const configureStore = () =>  {
    const store = createStore(
        combineReducers({
            todos : TodosReducer,
        }),
        applyMiddleware(thunk),
        
    );
    
    return store;
}


export default configureStore;
export const wrapper = createWrapper(configureStore);
