import {LOAD_PEOPLE, LOAD_PEOPLE_ERROR, LOAD_PEOPLE_SUCCESS} from './action.js';

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
    constructor({id, name, gender, films}) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.films = [];
    }
}
export const reducer = ( state=initialState, action ) => {
    switch( action.type ) {
        case LOAD_PEOPLE:
            return {...state, loadingPeople: action.payload}
        case LOAD_PEOPLE_SUCCESS:
            const people = action.payload.map( actor => new People(actor));
            console.log('People Load Successful... addtion results to state');
            console.log(people);
            return {...state, people: people, loadingPeople: false}

        default:
            return state;
    }
}