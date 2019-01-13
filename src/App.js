import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { sendData } from './services/PostData';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import background from './assets/img/Bg_banner.png';
import bakery from './assets/fonts/bakery.ttf';
import aleo from './assets/fonts/aleo.ttf';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bakery';
    src: url(${bakery});
    font-display: fallback;
  }
  @font-face {
    font-family: 'Aleo';
    src: url(${aleo});
    font-display: fallback;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    color: #fff;
    font-family: 'Aleo';
    font-size: 13px;
  }
`

const StyledWrapper = styled.div`
  background: url(${background}) 0/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  h1 {
    font-family: 'Bakery';
    font-size: 120px;
    font-weight: 400;
    margin: 0;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 80px;
      padding: 10px
    }
  }
  button {
    border-radius: 24px;
    border: 2px solid #f6f6f6;
    background: transparent;
    text-transform: uppercase;
    color: #fff;
    padding: 15px 57px 15px 56px;
    font-weight: 700;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    transition-property: color;
    transition-duration: 0.5s;
    &:before {
      content: "";
      border-radius: 24px;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      transform: scaleY(0);
      transform-origin: 50% 50%;
      transition-property: transform;
      transition-duration: 0.5s;
      transition-timing-function: ease-out;
    }
    &:hover {
      cursor: pointer;
      color: #a83a5e;
      &:before {
        transform: scaleY(1);
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
      }
    }
  }
`

const SubmitButton = styled.button`
  text-transform: uppercase;
  border-radius: 24px;
  background-color: #a83a5e;
  border: none;
  color: #fff;
  padding: 18px 0;
  width: 100%;
  max-width: 366px;
  margin: 42px 0 0 0;
  transition: all 0.3s ease-out;
  &:hover {
    color: #a83a5e;
    background-color: #fff;
    border: 1px solid #a83a5e;
    cursor: pointer;
  }
`

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 0;
  font-size: 18px;
`

class App extends Component {
  constructor(props){
    super();
    this.state = {
      open: false,
      login: '',
      password: '',
      message: '',
      status: ''
    };
  };

  handlerOnClickButton = () => {
    this.setState({
      open: true,
      error: null
    });
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handlerFormOnSubmit = e => {
    e.preventDefault();

    sendData(this.state.login, this.state.password, this.state.message, this.state.status)
      .then( res => {
        this.setState({
          login: res.data.login,
          password: res.data.password,
          message: res.data.message,
          status: res.data.status
        })
      })
      .catch( err => {
        this.setState({
          login: err.data.login,
          password: err.data.password,
          message: err.data.message,
          status: err.data.status
        })
      });
  }

  render() {
    const { open, login, password, message, status } = this.state;
    return (
      <>
        <GlobalStyle />
        <StyledWrapper>
        <Dialog
          open={open}
          onClose={this.handleClose}
          onSubmit={this.handlerFormOnSubmit}
          aria-labelledby="form-dialog-title"
          PaperProps={{
            style: {
              maxWidth: '366px',
              textAlign: 'center',
              color: '#292d2f'
            },
          }}
        >
          <DialogTitle>Are you Raspeberry Knight?</DialogTitle>
          <DialogContent>
            { !status ?
                <form onSubmit={this.handlerFormOnSubmit}>
                  <TextField
                    margin="dense"
                    id="login"
                    label="Email"
                    type="email"
                    fullWidth
                    value={login}
                    onChange={this.handleChange('login')}
                    required={true}
                  />
                  <TextField
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={this.handleChange('password')}
                    required={true}
                  />
                  <SubmitButton type="submit" onClick={this.handleChange('status')} value={status}>log in</SubmitButton>
                  <CloseButton onClick={this.handleClose}>x</CloseButton>
                </form>
                : <span>{message}</span>
              }
            </DialogContent>
          </Dialog>
          <Nav />
          <CenterContent>
            <h1>Raspberry kingdom</h1>
            <button type="button" onClick={this.handlerOnClickButton}>enter the gates</button>
          </CenterContent>
          <Footer />
        </StyledWrapper>
      </>
    );
  }
}

export default App;