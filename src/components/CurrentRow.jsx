import React from 'react'
import Cell from './Cell';

function CurrentRow({
    currentGuess
}) {
    
    
    return (
        <div className='flex'>
            {currentGuess.map((letter, index) => (
                <Cell 
                key={index} 
                value={letter} 
                isCompleted={false} 
                status={'current'}
                />
            ))}
        </div>
    )
}

export default CurrentRow