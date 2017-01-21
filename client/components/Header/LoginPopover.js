import React from 'react';
import { findDOMNode, render } from 'react-dom';
import { Form, Col, FieldGroup, FormGroup, FormControl, ControlLabel, Overlay, OverlayTrigger, Tooltip, Button, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { signUpUser } from '../../actionCreators/accountActions'


class LoginPopover extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: '',
    }

    this.handleInputChange = this.props.handleInputChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.toggle = this.toggle.bind(this);

      //DEMO
    if (props.demoMode) {
      this.state.loginEmail = 'demo';
      this.state.loginPassword = 'demoupinhere';
    }
  }

  loginSubmit(e) {
    e.preventDefault();
    this.props.loginUser({email: this.state.loginEmail, password: this.state.loginPassword})
    .then(() => {
      this.props.togglePopover('login', false);
      this.props.getListings();
    })
  }

  toggle() {
    // this.setState({ showPopover: !this.state.showPopover })
    this.props.togglePopover('login');
  }




  render() {
    const sharedProps = {
      show: this.props.showLogin,
      container: this,
      target: () => findDOMNode(this.refs.target)
    };

    return (
      <div>
        <Button ref="target" onClick={this.toggle}>Log In</Button>
        <Overlay {...sharedProps} placement="bottom">
          <Popover id="popover-positioned-bottom" style={{'width': '250px'}}>
            <Form onSubmit={this.loginSubmit}>
              <FormGroup controlId="loginEmail">
                <FormControl name="loginEmail" type="text" value={this.state.loginEmail} placeholder="e-mail" onChange={this.handleInputChange}/>
              </FormGroup>
              <FormGroup controlId="loginPassword">
                <FormControl name="loginPassword" type="password" value={this.state.loginPassword} placeholder="password" onChange={this.handleInputChange}/>
              </FormGroup>

              <Button className="welcomeButton" bsStyle="primary" bsSize="small" type="submit">
              Log In
              </Button>

            </Form>
          </Popover>
        </Overlay>
     </div>
   )
 }
};


export default LoginPopover;
