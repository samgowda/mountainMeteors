import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Listing from './Listing';
import {connect} from 'react-redux';
import GoogMap from './Map';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { getListings } from '../../actionCreators/listingActions.js';

const tempMarkers = [{
  position: {
    lat: 40.7701008,
    lng: -73.9775276,
  },
  key: `Central Park`,
  defaultAnimation: 2,
}];

const tempOrigin = { lat: 40.7725833, lng: -73.9736894 };

class MainView extends React.Component {
  constructor(){
    super();
  }

  componentWillMount() {
    this.props.getListings();
  }

  componentDidUpdate() {
    console.log('main state updated', this.props, this.state);
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={8} md={8} lg={7.5} id="leftcol">
          <GoogMap markers={tempMarkers} origin={tempOrigin} />
        </Col>

        <Col xs={12} sm={4} md={4} lg={4.5} id="rightcol">
          <Listing listings={this.props.listings} />
        </Col>
      </div>
    )
  }
};


function mapStateToProps(state) {
  return {
    listings: state.listings
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getListings}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
