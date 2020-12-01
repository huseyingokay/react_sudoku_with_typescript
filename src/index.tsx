import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';

import { Content, Title, Card, Grid } from "./components";
import reportWebVitals from "./core/reportWebVitals";
import { GlobalStyles, Theme } from "./styles";
import configureStore from "./core/configure-store";

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Provider store={store}>
    <Content data-cy="content">
      <Title data-cy="title"> Sudoku </Title>
      <Card data-cy="card">
        <Grid />
      </Card>
    </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
