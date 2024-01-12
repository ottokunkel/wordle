import React from 'react'
import Cell from './Cell'

function EmptyRow() {

    //5 letter words
    const emptyCells = Array.from(Array(5))

    return (
    <div className='flex'>
        {emptyCells.map((_, i) => (
            <Cell 
            value={''} 
            isCompleted={false} 
            status={'current'}
            />
        ))}
    </div>
  )
}

export default EmptyRow