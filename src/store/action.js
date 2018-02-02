import axios from 'axios';

export const LOAD_FILM = "aadnbkanbakdT3Fjbnkj-LOAD_FILM-adjjrisNDDAVKADFKJKJ";
export const LOAD_FILM_ERROR = "anvanfkvjanvkajnva-LOAD_FILM_ERROR-aidvnadvkbajlvabd"
export const LOAD_FILM_SUCCESS = "aivnajknabheijk-LOAD_FILM_SUCCESS-dafvbavjkablajvbnlajn"
export const LOAD_PEOPLE = "DDDDCSVS-LOAD_PEOPLE-SDFDSFDSFSDFS";
export const LOAD_PEOPLE_ERROR = "akvnalkvnavlknalkbfnlkdfbn-LOAD_PEOPLE_ERROR-adkvjnavknakjan";
export const LOAD_PEOPLE_SUCCESS = "aonlbknsbklnlbknblnbl-LOAD_PEOPLE_SUCCESS-aengjannvaknvadlk";
export const SELECTED_PERSON = "aadnvkadfnvakjnbakbneoigr-SELECTED_PERSON-adjfvbadkvbaivbadfbvadf";

export const peopleHasErrored = bool => {
    return {
        type: LOAD_PEOPLE_ERROR
    };
}

export const filmHasErrored = bool => {
    return {
        type: LOAD_FILM_ERROR
    };
}

export const peopleIsLoading = bool => {
    return {
        type:  LOAD_PEOPLE,
        payload: bool
    };
}

export const filmIsLoading = bool => {
    return {
        type:  LOAD_FILM,
        payload: bool
    };
}

export const peopleDataSuccess = data => {
    return {
        type: LOAD_PEOPLE_SUCCESS,
        payload: data
    };
}

export const filmDataSuccess = data => {
    return {
        type: LOAD_FILM_SUCCESS,
        payload: data
    };
}

export function fetchData(filter, type) {
    return (dispatch, getState, url) => {
        console.log(`Looking for data type: ${type}, with filter: ${filter} ...`)
        type === 'people' && dispatch(peopleIsLoading(true));
        type === 'film' && dispatch(filmIsLoading(true));
        axios.get(`${url}/${filter}`)
            .then(response => {
                console.log("Successfully received response...");
                console.log(response);
                type === 'people' && dispatch( peopleDataSuccess(response.data) );
                type === 'film' && dispatch( filmDataSuccess(response.data) );
                type === 'people' && dispatch( peopleIsLoading(false) );
                type === 'film' && dispatch( filmIsLoading(false) );
            })
            .catch( error => {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  //  console.log(error.response.data.message);
                  //  console.log(error.response.status);
                  //  console.log(error.response.headers);

                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log("Error has occured in obtaining data...");
                console.log(error);
                type === 'people' ?
                dispatch( peopleHasErrored(true) ) :
                dispatch( filmHasErrored(true) )
                type === 'people' ?
                dispatch( peopleIsLoading(false) ) :
                dispatch( filmIsLoading(false) )
            })
    };
}