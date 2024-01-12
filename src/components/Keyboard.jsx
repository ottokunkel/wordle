import React, { useState } from 'react'
import { useEffect } from 'react';

function Keyboard({
    onKeypress,
    onEnter,
    onDelete,
    onSwitch
}) {
    const row_1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row_2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row_3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    
    const [keyWidth,setKeyWidth] = useState(2.75);
    const [keyHeight,setKeyHeight] = useState(3.75);
    const [buttonWidth, setButtonWidth] = useState(3.75);
    
    useEffect(() => {
        const listener = (e) => {
          if (e.key === 'Enter') {
            onEnter()
          } else if (e.key === 'Backspace') {
            onDelete()
          } else {
            const key = e.key
            // TODO: check this test if the range works with non-english letters
            if (key.length === 1 && key >= 'a' && key <= 'z') {
              onKeypress(key)
            }
          }
        }

        window.addEventListener('keyup', listener)
        return () => {
          window.removeEventListener('keyup', listener)
        }
      }, [onEnter, onDelete, onKeypress])

    return (
        <div >
            <div className=''>
                <div className='flex flex-row justify-center'>
                    {row_1.map( (letter) => {
                    return (<button disabled={onSwitch} onClick={() => {onKeypress(letter)}} className={
                        "w-[2.75rem] h-[3.75rem] mx-0.5 my-0.5 bg-gray-500 text-white font-bold rounded"
                    }>{letter}</button>);
                    })}
                </div>
                <div className='flex flex-row justify-center mx-5'>
                    {row_2.map( (letter) => {
                    return (<button disabled={onSwitch} onClick={() => {onKeypress(letter)}} className={"w-[2.75rem] h-[3.75rem] mx-0.5 my-0.5 bg-gray-500 text-white font-bold rounded"}>{letter}</button>);
                    })}
                </div>
                <div className='flex flex-row justify-center'>
                    <button disabled={onSwitch} onClick={() => {onEnter()}} className={"w-[4.125rem] h-[3.75rem] mx-0.5 my-0.5 bg-gray-500 text-white font-bold text-sm rounded"}>ENTER</button>
                    {row_3.map( (letter) => {
                    return (<button onClick={() => {onKeypress(letter)}} className={"w-[2.75rem] h-[3.75rem] mx-0.5 my-0.5 bg-gray-500 text-white font-bold rounded"}>{letter}</button>);
                    })}
                    <button disabled={onSwitch} onClick={() => {onDelete()}} className={"w-[4.125rem] h-[3.75rem] mx-0.5 my-0.5 bg-gray-500 text-white font-bold  rounded"}>DEL</button>
                </div>
                
                
               
                
            </div>
            
        </div>
    );
}

export default Keyboard
