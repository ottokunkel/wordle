import React from 'react'
import Cell from './Cell'
import { getStatuses } from '../services/logic';

function CompletedRow({
    prevGuess,
    answer
}) {


    const guessArr = [...prevGuess];
    const statusArr = getStatuses(guessArr,answer);
    

    return (
        <div className='flex'>
                {guessArr.map((letter, index) => (
                    <Cell 
                    key={index} 
                    value={letter} 
                    isCompleted={true} 
                    status={
                        statusArr[index]
                    }
                    />
                ))}
            </div>
    )
}

export default CompletedRow