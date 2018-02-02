import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './store/action.js';


class DisplayFilm extends Component {
    componentDidMount() {
        const {selectedPerson, people, fetchData} = this.props;
        console.log(`GOT HERE: ${selectedPerson}`);
        if(selectedPerson) {
            const films = people[selectedPerson].films;
            if( films.length > 0){
                console.log(films);
                films.map( film => {
                    const filter = film.slice(film.indexOf(".com/")+5);
                    //console.log(film.split("https://ghibliapi.herokuapp.com/", 1));
                    fetchData(filter, 'film');
                })
            }
        }
    }

    render() {
    return (
      <div>
        {this.props.films.map( film => {
            <div key={film.id} className="row">
                <div className="small-6 medium-3 columns">
                    {film.title}
                </div>
                <div className="small-6 medium-9 columns">
                    {film.description}
                </div>
            </div>
        })}
      </div>
    );
  }
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


const enhanceComponent = connect(mapStateToProps, mapDispatchToProps);
export default enhanceComponent(DisplayFilm);
