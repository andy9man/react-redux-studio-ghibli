import {LOAD_FILM} from './action.js';

initialState = {
    films: [],
    isLoading: true,
}

export const reducer = ( state=initialState, action ) => {
    switch( action.type ) {
        default:
            return state;
    }
}