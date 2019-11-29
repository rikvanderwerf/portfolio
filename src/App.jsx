import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from './pages/Home';

const theme = {
  cardbackground: '#fff',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,500,600,700,700i&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Vollkorn:400,400i,600,600i,700&display=swap');

  html, body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
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
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
