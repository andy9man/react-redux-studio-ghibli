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



            //     dispatch(peopleIsLoading(false));

            //     return response;
            // })
            // .then((response) => response.json())
            // .then((items) => dispatch(peopleFetchDataSuccess(items)))
            // .catch(() => dispatch(peopleHasErrored(true)));
    };
}