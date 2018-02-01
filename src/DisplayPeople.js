import React, { Component } from 'react';
import { connect } from 'react-redux';
import { peopleFetchData } from './store/action.js';

class DisplayPeople extends Component {
  componentDidMount() {
      this.props.fetchData();
  }
    render() {
    return (
      <div className="App">
        <p>{this.props.loadingPeople ? "HELLO, I'M LOADING" : "I'M NOT LOADING"}</p>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return{
        loadingPeople: state.loadingPeople
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchData: () => dispatch(peopleFetchData)
    }
}


const enhanceComponent = connect(mapStateToProps, mapDispatchToProps);
export default enhanceComponent(DisplayPeople);
