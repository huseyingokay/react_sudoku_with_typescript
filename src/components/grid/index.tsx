import React, { FC } from "react";
import { Container, Row } from './styles';
import { Block } from './block';

export const Grid: FC = () => {
  return (
    <Container data-cy="grid-container">
      {[...Array(9)].map((_, rowIndex) => (
        <Row data-cy="grid-row-container" key={rowIndex}>
            {[...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex}/>
            ))}
        </Row>
      ))}
    </Container>
  );
};


