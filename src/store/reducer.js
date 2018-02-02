import {
    LOAD_PEOPLE,
    LOAD_PEOPLE_ERROR,
    LOAD_PEOPLE_SUCCESS,
    LOAD_FILM,
    LOAD_FILM_ERROR,
    LOAD_FILM_SUCCESS,
    SELECTED_PERSON
} from './action.js';

const initialState = {
    people: [],
    failureLoadingPeople: false,
    loadingPeople: false,
    selectedPerson: undefined,

    films: [],
    failedToLoadFilms: false,
    loadingFilms: false
}

class People {
    constructor({id, name, gender, films}) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.films = films;
    }
}

class Film {
    constructor( {id, title, description})  {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}

export const reducer = ( state=initialState, action ) => {
    switch( action.type ) {
        case LOAD_PEOPLE:
            return {...state, loadingPeople: action.payload};
        case LOAD_PEOPLE_SUCCESS:
            const people = action.payload.map( actor => new People(actor));
            console.log('People Load Successful... addtion results to state');
            console.log(people);
            return {...state, people: people, loadingPeople: false};

        case LOAD_FILM:
            return {...state, loadingFilms: action.payload};
        case LOAD_FILM_SUCCESS:
            return {...state, films: state.films.concat([ new Film(action.payload)]), loadingFilms: false}

        case SELECTED_PERSON:
            return {...state, films: [], selectedPerson: action.payload}
        default:
            return state;
    }
}