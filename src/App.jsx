import { useEffect, useState } from 'react'
import Keyboard from './components/keyboard'
import Grid from './components/Grid';
import wordDict from './wordDict.json';
import possibleWords from './possibleWords.json';

//binary search for checking if an input is a valid word
function checkList(arr, x, start, end) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  const midVal = arr[mid].toLowerCase(); 
  const xLower = x.toLowerCase();        

  if (midVal === xLower) {
    return true;
  } else {
    if (midVal > xLower) {
      return checkList(arr, x, start, mid - 1);
    } else {
      return checkList(arr, x, mid + 1, end);
    }
  }
}

function App() {

  const [gameOver, setGameState] = useState(false);
  const [currentRow, changeRow] = useState(0);
  const [currentCol, changeCol] = useState(0);
  const tempWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
  const [word, setWord] = useState(tempWord.toUpperCase());
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

  //chooses a random word

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
    let tempWord = word;
    let iOffset = 0;
    //check if answer is a word
    const isWord = checkList(wordDict, answerGrid[currentRow].join(""), 0, wordDict.length);
    console.log(isWord);
    if(isWord){
      //changes colors
      let won = true;
      const newGrid = colorGrid.map(row => [...row]);
      for(var i = 0; i < 5; i++){
        if(answerGrid[currentRow][i] == word.charAt(i)){
          console.log("match found at: " + i)
          newGrid[currentRow][i] = 'g';
          tempWord = tempWord.substring(0,i - iOffset) + tempWord.substring(i+1 - iOffset,tempWord.length);
          console.log(tempWord);
          iOffset++;
        }else{
          won = false;
          newGrid[currentRow][i] = 'b';
        }
      }
      console.log(tempWord);

      for(var i = 0; i < tempWord.length; i++){
        if(tempWord.includes(answerGrid[currentRow][i])){
          newGrid[currentRow][i] = 'y';
          tempWord = tempWord.substring(0,i) + tempWord.substring(i+1,5);
        }
      }
      //check if won
      if(won){
        //end game, and output message
        alert("game over, you won");
        setGameState(true);
      }

      //updates the grid, and sets to the next row
      changeColor(newGrid);
      changeCol(0);
      changeRow(currentRow + 1);
    }
    
  }
}  

  return (
    <>
      <h1>solution: {word}</h1>
      <div className='grid grid-rows-2 gap-4'>

        <div className='flex flex-col justify-center'>
          <div className='basis-1/2'>
            <Grid colorGrid={colorGrid} AnswerGrid={answerGrid}/>
          </div>
          <div className='basis-1/2'>
             <Keyboard onSwitch={gameOver} handleKeypress={updateLetter} handleDelete={handleDelete} handleEnter={handleEnter}/>
          </div>
         
        </div>
        
      </div>
      
    </>
  )
}

export default App
