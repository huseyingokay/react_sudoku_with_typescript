import React, { FC } from "react";

import { Container } from './styles';

interface IProps {
  colIndex: number;
  rowIndex: number;
}

export const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return (
    <Container>
    </Container>
  );
};
