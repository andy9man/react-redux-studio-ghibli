import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './store/action.js';
import femaleAvatar from './assets/Female-Avatar.png';
import maleAvatar from './assets/Male-Avatar.png';
import {SELECTED_PERSON} from './store/action';


class DisplayPeople extends Component {

    getMovieData() {
        const {selectedPerson, people, fetchData} = this.props;
        console.log(selectedPerson);
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

    componentDidMount() {
        this.props.fetchData('people', 'people');
    }

    render() {
        return (
        <div>
            {(!this.props.failureLoadingPeople && !this.props.loadingPeople) && this.props.people.map( (actor, index) => (
                <img
                    key={index}
                    onClick={() => {
                        this.props.selectPerson(index);
                        this.getMovieData();
                    }}
                    src={actor.gender.toLowerCase() === 'male' ? maleAvatar : femaleAvatar} alt={actor.name}
                />
            ))}
        </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        loadingPeople: state.loadingPeople,
        failureLoadingPeople: state.failureLoadingPeople,
        people: state.people,
        selectedPerson: state.selectedPerson
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchData(filter, type) {
            dispatch(fetchData(filter, type));
        },
        selectPerson(person) {
            dispatch( {type: SELECTED_PERSON, payload: person} );
        }
    }
}


const enhanceComponent = connect(mapStateToProps, mapDispatchToProps);
export default enhanceComponent(DisplayPeople);
