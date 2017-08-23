import fuck from './Reducers/Reducers'
import { createStore } from 'redux';

export const initialState = {
    defaultNum: 0
};

const store = createStore(fuck,initialState );

export default store;
