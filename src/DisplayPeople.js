import React, { Component } from 'react';
import { connect } from 'react-redux';
import { peopleFetchData } from './store/action.js';
import femaleAvatar from './assets/Female-Avatar.png';
import maleAvatar from './assets/Male-Avatar.png';


class DisplayPeople extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
    return (
      <div className="App">
        {this.props.people.map( (actor, index) => (
            <img key={index} src={actor.gender.toLowerCase() === 'male' ? maleAvatar : femaleAvatar} alt={actor.name} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
    return{
        loadingPeople: state.loadingPeople,
        people: state.people
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchData: () => dispatch(peopleFetchData())
    }
}


const enhanceComponent = connect(mapStateToProps, mapDispatchToProps);
export default enhanceComponent(DisplayPeople);
