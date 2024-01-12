import { useEffect, useState } from 'react'
import Keyboard from './components/keyboard'
import Grid from './components/Grid';
import wordDict from './wordDict.json';
import possibleWords from './possibleWords.json';
import { binarySearch } from './services/logic';

function App() {

  const [gameOver, setGameState] = useState(false);
  const [currentGuess, setCurrentGuess] = useState(new Array(5).fill(''));
  const [prevGuesses, setPrevGuesses] = useState([]);
  const [currentLetter, setCurrentLetter] = useState(0);
  const tempWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
  const [word, setWord] = useState(tempWord);
  
  //chooses a random word

  const addGuess = (str) => {
      setPrevGuesses([...prevGuesses, str])
  }


const updateLetter = (letter) => {
  if(currentLetter < 5){
    const newGuess = [...currentGuess];
    newGuess[currentLetter] = letter; 
    setCurrentGuess(newGuess);
    setCurrentLetter(currentLetter + 1);
  }
}


const handleDelete = () => {
  if(currentLetter > 0){
    const newGuess = [...currentGuess];
    newGuess[currentLetter - 1] = ''; 
    setCurrentGuess(newGuess);
    setCurrentLetter(currentLetter - 1);
  }
}

const handleEnter = () => {
  if(currentLetter == 5){
    let checkedWord = currentGuess.join('');
    let tempWord = word;
    let won = true;
    //check if answer is a word
    console.log(checkedWord);
    const isWord = binarySearch(wordDict, checkedWord, 0, wordDict.length);
    console.log(isWord);
    if(isWord){
      addGuess(checkedWord)
      for(let i = 0; i < tempWord.length; i++){
        if(tempWord.charAt(i) != checkedWord.charAt(i)){
          won = false;

        }
      }
      setCurrentLetter(0);
      setCurrentGuess(new Array(5).fill(''));

      if(won){
        //end game, and output message
        alert("game over, you won");
        setGameState(true);
      }
    }


    

    
    
    
  }
}  

  const totalAttemptsAllowed = 6;
  

  return (
    <>
      <h1>solution: {word}</h1>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <div className='basis-1/3'>
            <Grid prevGuesses={prevGuesses} answer={word} currentGuess={currentGuess}/>
          </div>
          <div className='h-5'></div>
          <div className='basis-1/3'>
            <Keyboard onSwitch={false} onKeypress={updateLetter} onDelete={handleDelete} onEnter={handleEnter}/> 
          </div>
         
        </div>
        
      </div>
      
    </>
  )
}

export default App
