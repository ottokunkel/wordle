import React, { useState } from 'react'
import { useEffect } from 'react';
import Key from './key';
import { getCharStatus } from '../services/logic';

function Keyboard({
    onKeypress,
    onEnter,
    onDelete,
    charStatuses,
}) {
    const row_1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row_2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row_3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  
    useEffect(() => {
        const listener = (e) => {
          if (e.key === 'Enter') {
            onEnter()
          } else if (e.key === 'Backspace') {
            onDelete()
          } else {
            const key = e.key
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
    
  
    console.log(charStatuses)
    return (
        <div >
            <div className=''>
                <div className='flex flex-row justify-center'>
                  {row_1.map( (letter, i) => { 
                    return (
                      <Key 
                        onClickMethods={{onDelete, onEnter, onKeypress}}
                        key={i} 
                        text={letter} 
                        type={'key'}
                        color={charStatuses[letter]}
                      />
                    )
                  })}
                </div>
                <div className='flex flex-row justify-center mx-5'>
                  {row_2.map( (letter, i) => { 
                    return (
                      <Key 
                      onClickMethods={{onDelete, onEnter, onKeypress}} 
                      key={i} 
                      text={letter} 
                      type={'key'}
                      />
                    )
                  })}
                </div>
                <div className='flex flex-row justify-center'>
                  <Key 
                    onClickMethods={{onDelete, onEnter, onKeypress}} 
                    type={'delete'} 
                    text={'delete'}
                    />
                  {row_3.map( (letter, i) => { 
                    return (
                      <Key 
                        onClickMethods={{onDelete, onEnter, onKeypress}} 
                        key={i} 
                        text={letter} 
                        type={'key'}/>
                      )
                    })}
                  <Key 
                    onClickMethods={{onDelete, onEnter, onKeypress}} 
                    type={'enter'} 
                    text={'enter'}
                    />
                </div>
                 
            </div>
            
        </div>
    );
}

export default Keyboard
