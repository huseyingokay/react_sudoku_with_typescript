import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Content, Title, Card, Grid } from "./components";
import reportWebVitals from "./core/reportWebVitals";
import { GlobalStyles, Theme } from "./styles";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title"> Sudoku </Title>
      <Card data-cy="card">
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
