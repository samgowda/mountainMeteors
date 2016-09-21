//React
import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

//Components
import Header from './Header/Header';
import Nav from './Header/Nav'
import MainView from './MainView/MainView';
import GoogMap from './MainView/Map';
import Listing from './MainView/Listing';
import Welcome from './Welcome/Welcome';
import Add from './Add/Add';
import Survey from './Survey/Survey';
import submitButton from './Survey/submitButton';
import GridSearch from './Survey/GridSearch';

//CSS
import styles from '../styles/style.css';

class Main extends React.Component{
  constructor(){
    super();
  }

  render() {
    console.log('PROPS', this.props);
    var displayModule;
    // if (loginUser) {
    if (!this.props.user.authenticated) {
      displayModule = <Welcome />
    } else if (this.props.user.surveys.length > 0) {
      displayModule = <MainView {...this.props}/>
    } else {
      displayModule = <GridSearch />
    }
    return (
      <Grid fluid={ true }>
        <Row id="header">
          <h1 className="title">
          <Nav/>
          </h1>

          <Header />
        </Row>
        <Add/>
        <Row className="bodyrow">
          {displayModule}
        </Row>

      </Grid>

    )
  }
};

export default Main;
