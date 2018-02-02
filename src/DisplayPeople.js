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
                    fetchData(filter, 'film');
                    return undefined;
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
            {this.props.failureLoadingPeople ? <div className="padding-small margin-bottom-tiny text-white bg-alert">There was an issue loading people</div> :
                (this.props.loadingPeople ? <div className="padding-top-xlarge"><span className="loading-indicator xlarge"></span></div> :
                    this.props.people.map( (actor, index) => (
                    <img
                        key={index}
                        onClick={() => {
                            this.props.selectPerson(index);
                            this.getMovieData();
                        }}
                        src={actor.gender.toLowerCase() === 'male' ? maleAvatar : femaleAvatar} alt={actor.name}
                    />
                    )))}
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
