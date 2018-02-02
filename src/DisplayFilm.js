import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './store/action.js';


const DisplayFilm = props => {

    return (
        <div>
            <hr />
            <div className="bg-off-white padding-vert-medium row">
                <div className="small-10 small-centered">
                    <h2><strong><span className="margin-left-large">{props.people[props.selectedPerson].gender.toLowerCase() === 'male' ? 'Actor' : 'Actress'}:</span></strong> {props.people[props.selectedPerson].name}</h2>
                </div>
            </div>
            {props.loadingFilms ? <div className="padding-top-xlarge"><span className="loading-indicator xlarge"></span></div> :
             props.films.length > 0 && props.films.map( (film, index) =>
                    <div key={film.id} className={index%2 === 1 ? "bg-off-white row" : "row"}>
                        <div className="small-6 medium-3 columns padding-vert-medium text-center">
                            <h3>{film.title}</h3>
                        </div>
                        <div className="small-6 medium-9 columns padding-vert-medium text-left">
                            {film.description}
                        </div>
                    </div>
             )}
        </div>
    );
}

const mapStateToProps = state => {
    return{
        loadingFilms: state.loadingFilms,
        failureLoadingFilms: state.failureLoadingFilms,
        films: state.films,
        people: state.people,
        selectedPerson: state.selectedPerson
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchData: (filter, type) => dispatch(fetchData(filter, type))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DisplayFilm);
