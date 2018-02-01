import axios from 'axios';

export const LOAD_FILM = "aadnbkanbakdT3Fjbnkj-LOAD_FILM-adjjrisNDDAVKADFKJKJ";
export const LOAD_PEOPLE = "DDDDCSVS-LOAD_PEOPLE-SDFDSFDSFSDFS";
export const LOAD_PEOPLE_ERROR = "akvnalkvnavlknalkbfnlkdfbn-LOAD_PEOPLE_ERROR-adkvjnavknakjan";
export const LOAD_PEOPLE_SUCCESS = "aonlbknsbklnlbknblnbl-LOAD_PEOPLE_SUCCESS-aengjannvaknvadlk";

export function peopleHasErrored(bool) {
    return {
        type: LOAD_PEOPLE_ERROR
    };
}

export function peopleIsLoading(bool) {
    return {
        type:  LOAD_PEOPLE,
        payload: bool
    };
}

export function peopleFetchDataSuccess(data) {
    return {
        type: LOAD_PEOPLE_SUCCESS,
        payload: data
    };
}

export function peopleFetchData() {
    return (dispatch, getState, url) => {
        console.log("fetch date now...")
        dispatch(peopleIsLoading(true));
        axios.get(`${url}/people`)
            .then(response => {
                dispatch( peopleFetchDataSuccess(response.data));
                console.log(response.data);
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
                dispatch(peopleHasErrored(true));
            })


        dispatch(peopleIsLoading(false));
    };
}