import axios from 'axios';

export const LOAD_FILM = "aadnbkanbakdT3Fjbnkj-LOAD_FILM-adjjrisNDDAVKADFKJKJ";
export const LOAD_PEOPLE = "DDDDCSVS-LOAD_PEOPLE-SDFDSFDSFSDFS";

export function peopleHasErrored(bool) {
    return {
        type: 'PEOPLE_HAS_ERRORED',
        hasErrored: bool
    };
}

export function peopleIsLoading(bool) {
    return {
        type: 'PEOPLE_IS_LOADING',
        isLoading: bool
    };
}

export function peopleFetchDataSuccess(items) {
    return {
        type: 'PEOPLE_FETCH_DATA_SUCCESS',
        items
    };
}
export function peopleFetchData() {
    console.log('got here');
    return (dispatch, getState, url) => {
        dispatch(peopleIsLoading(true));
        axios.get(`${url}/people`)
        .then(response => {
            console.log(response);
        })

        

            //     dispatch(peopleIsLoading(false));

            //     return response;
            // })
            // .then((response) => response.json())
            // .then((items) => dispatch(peopleFetchDataSuccess(items)))
            // .catch(() => dispatch(peopleHasErrored(true)));
    };
}