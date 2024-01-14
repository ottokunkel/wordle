import React from 'react'
import Cell from './Cell';

function CurrentRow({
    currentGuess,
    isRevealing
}) {
    
    
    return (
        <div className='flex'>
            {currentGuess.map((letter, index) => (
                <Cell 
                key={index} 
                value={letter} 
                isCompleted={false} 
                position = {index}
                status={'current'}
                isRevealing={isRevealing}
                />
            ))}
        </div>
    )
}

export default CurrentRow