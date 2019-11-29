import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from './pages/Home';

const theme = {
  cardbackground: '#fff',
  backgroundcolor: '#F3F5F9',
  maincolor: '#6C59FF',
  titlecolor: '#4A4A4A',
  textcolor: '#70706F',
  maincolorshadow: 'rgb(108, 89, 255, 0.2)',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,500,600,700,700i&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Vollkorn:400,400i,600,600i,700&display=swap');

  html, body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.backgroundcolor}
  }

  body {
    font-family: Open Sans, sans-serif;
    font-size: 16;
    color: ${(props) => props.theme.textcolor};
  }

  div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;


export default function App(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
