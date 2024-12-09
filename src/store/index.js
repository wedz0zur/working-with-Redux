
import { applyMiddleware, combineReducers, createStore } from 'redux'; // Загрузка функции для создания хранилища
import { cashReducer } from './cashReducer';
import { customReducer } from './customReduser';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";



const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))