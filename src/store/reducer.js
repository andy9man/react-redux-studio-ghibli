import {LOAD_FILM} from './action.js';

const initialState = {
    people: [],
    isLoadedPeople: false,
    failedToLoadPeople: false,
    loadingPeople: false,
    selectedPerson: undefined,
        
    films: [],
    isLoadedFilms: false,
    failedToLoadFilms: false,
    loadingFilms: false
}

class People {
    constructor(id, name, gender) { 
        this.id=id;
        this.name=name;
        this.gender=gender;
        this.films=[];
    }
}
export const reducer = ( state=initialState, action ) => {
    switch( action.type ) {
        default:
            return state;
    }
}