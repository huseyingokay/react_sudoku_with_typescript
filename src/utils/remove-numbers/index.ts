import { GRID } from '../../typings';
import { getRandomIndex, copyGrid } from  '../../utils';
import global from '../../global';
import solveGrid from '../solve-grid';

function removeNumbers(grid: GRID, attempts = 5): GRID {
    while(attempts > 0){
        let row = getRandomIndex();
        let col = getRandomIndex();

        while(grid[row][col] === 0){
            row = getRandomIndex();
            col = getRandomIndex();
        }

        const backup = grid[row][col];
        grid[row][col] = 0;


        //copy grid
        const gridCopy = copyGrid(grid);
        global.counter = 0;

        solveGrid(gridCopy);
        
        if(global.counter !== 1){
            grid[row][col] = backup;
            attempts--;
        }
    }


    return grid;
}

export default removeNumbers;