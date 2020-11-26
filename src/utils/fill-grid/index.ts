import { GRID, NUMBERS } from '../../typings';
import { shuffle } from '../index';

const gridExample : GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// A recursive func to check all possible combinations of numbers a solution found
// Not completed
function fillGrid(grid: GRID) {
    let row = 0;
    let col = 0;

    for (let i=0; i< 81; i++){
        row = Math.floor(i / 9);
        col = i % 9;

        if(grid[row][col] === 0) {
            shuffle(numbers);
            for(let value of numbers) {
                //is it not in grid row?
                if(!grid[row].includes(value)){
                     //is it not in grid column?
                     let isNotInCol = true;
                    for(let i=0; i<9; i++){
                        if(value === grid[i][col]) isNotInCol = false;
                    }
                    //is it not in grid square?
                    if(isNotInCol){

                    }
                }
               
                
                //if this is the case?
                grid[row][col] = value;
                //check if it is full or not

            } 
            break;
        }
    }
    grid[row][col] = 0;
}

export default fillGrid;
