import { useEffect, useState } from 'react'
import Keyboard from './components/keyboard'
import Grid from './components/Grid';

function App() {
  const [currentRow, changeRow] = useState(0);
  const [currentCol, changeCol] = useState(0);
  const [word, setWord] = useState("WORDS");


  const initGrid = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
  ]



const [answerGrid, changeLetter] = useState(initGrid);
//colors of gray, yellow, green
const [colorGrid, changeColor] = useState(initGrid);


const updateLetter = (letter) => {
  if(currentCol < 5){
    const newGrid = answerGrid.map(row => [...row]);
    newGrid[currentRow][currentCol] = letter;
    changeLetter(newGrid);
    changeCol(currentCol + 1);
  }
}


const handleDelete = () => {
  if(currentCol > 0){
    const newGrid = answerGrid.map(row => [...row]);
    newGrid[currentRow][currentCol - 1] = '';
    changeLetter(newGrid);
    changeCol(currentCol - 1);
  }
}

const handleEnter = () => {
  if(currentCol == 5){
    
    //check if answer is a word
    //check if answer if correct
    const newGrid = colorGrid.map(row => [...row]);
    for(var i = 0; i < 5; i++){
      
      if(answerGrid[currentRow][i] == word.charAt(i)){
        newGrid[currentRow][i] = 'g';
      }else if(word.includes(answerGrid[currentRow][i])){
        newGrid[currentRow][i] = 'y';
      }else{
        newGrid[currentRow][i] = 'b';
      }
    }
    changeColor(newGrid);
    
    
    //set logic for coloring boxes
    changeCol(0);
    changeRow(currentRow + 1);
  }
}  

  return (
    <>
      <h1>currentRow: {currentRow} currentCol: {currentCol}</h1>
      <div className='bg-green-200 grid grid-rows-2 gap-4'>

        <div className='flex flex-col justify-center'>
          <div className='basis-1/2'>
            <Grid colorGrid={colorGrid} AnswerGrid={answerGrid}/>
          </div>
          <div className='basis-1/2'>
             <Keyboard handleKeypress={updateLetter} handleDelete={handleDelete} handleEnter={handleEnter}/>
          </div>
         
        </div>
        
      </div>
      
    </>
  )
}

export default App
