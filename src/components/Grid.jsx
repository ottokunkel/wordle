import React, { useEffect, useState } from 'react'
import Cell from './Cell';
import CompletedRow from './CompletedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

function Grid({
    currentGuess,
    prevGuesses,
    answer,
    isRevealing,
}) {
    
    
    const totalAttemptsAllowed = 6;
    var emptyRows = totalAttemptsAllowed - prevGuesses.length - 1;
    let emptyRowsComponents = [];
    while(emptyRows--){
        emptyRowsComponents.push(emptyRows);
    }
`   `
    return (
    <div>
        {/* List of every previous guess */}
        {prevGuesses.map((prevGuess, i) => {
            return (
                <CompletedRow 
                    answer={answer}
                    prevGuess={prevGuesses[i]}
                    isRevealing={isRevealing && i == (prevGuesses.length - 1)}
                />
            );
        })}
        <CurrentRow currentGuess={currentGuess} isRevealing={false}></CurrentRow>
        {emptyRowsComponents.map( (_, i) => {
            return (<EmptyRow />)
        })}
        
    </div>
    )
}

export default Grid