import React, { FC, useEffect, useCallback, Dispatch } from "react";
import { Container, Row } from "./styles";
import { Block } from "./block";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { createGrid } from "../../reducers/actions";
import { BLOCK_COORDS, INDEX } from "../../typings";
import useMousetrap from "react-hook-mousetrap";
import { IReducer, selectBlock } from "../../reducers";

interface IState {
  selectedBlock?: BLOCK_COORDS;
}

export const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock,
  }));
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  useEffect(() => {
    create();
  }, [create]);

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0)
    dispatch(
      selectBlock([
        state.selectedBlock[0],
        (state.selectedBlock[1] - 1) as INDEX,
      ])
    );
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8)
    dispatch(
      selectBlock([  
        state.selectedBlock[0],
        (state.selectedBlock[1] + 1) as INDEX,
      ])
    );
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0) 
    dispatch(
      selectBlock([
        (state.selectedBlock[0] - 1) as INDEX,
        state.selectedBlock[1],
      ])
    );
  }

  useMousetrap("down", moveDown);
  useMousetrap("left", moveLeft);
  useMousetrap("right", moveRight);
  useMousetrap("up", moveUp);

  return (
    <Container data-cy="grid-container">
      {[...Array(9)].map((_, rowIndex) => (
        <Row data-cy="grid-row-container" key={rowIndex}>
          {[...Array(9)].map((_, colIndex) => (
            <Block colIndex={colIndex as INDEX} rowIndex={rowIndex as INDEX} />
          ))}
        </Row>
      ))}
    </Container>
  );
};

