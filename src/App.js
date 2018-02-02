import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayPeople from './DisplayPeople';
import DisplayFilm from './DisplayFilm';

class App extends Component {
  render() {
    return (
      <div className="padding-horiz-large padding-vert-large" style={ {width: '100vw', height: '100vh'} }>
        <header className="padding-bottom-xlarge">
          <h1>Famous Ghibli People</h1>
        </header>

        <div className="row">
          <div className="small-10 small-centered columns text-center">

            <DisplayPeople/>

          </div>
        </div>

        {
          <div className="row">
            <div className="small-10 small-centered columns text-center">

              {this.props.selectedPerson !== undefined && <DisplayFilm /> }
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
    return{
        selectedPerson: state.selectedPerson
    }
}

export default connect(mapStateToProps)(App);
