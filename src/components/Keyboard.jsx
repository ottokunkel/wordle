import React from 'react'

function Keyboard(props) {
    const row_1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const row_2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const row_3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];



    return (
        <div >
            <div className=''>
                <div className='flex flex-row justify-center'>
                    {row_1.map( (letter) => {
                    return (<button disabled={props.onSwitch} onClick={() => {props.handleKeypress(letter)}} className='w-[2.475rem] h-14 mx-0.5 my-0.5 bg-gray-500 text-white font-bold rounded'>{letter}</button>);
                    })}
                </div>
                <div className='flex flex-row justify-center mx-5'>
                    {row_2.map( (letter) => {
                    return (<button disabled={props.onSwitch} onClick={() => {props.handleKeypress(letter)}} className='w-10 h-14 mx-0.5 my-0.5 bg-gray-500 text-white font-bold rounded'>{letter}</button>);
                    })}
                </div>
                <div className='flex flex-row justify-center'>
                    <button disabled={props.onSwitch} onClick={() => {props.handleEnter()}} className='w-[3.75rem] h-14 mx-0.5 my-0.5 bg-gray-500 text-white font-bold text-sm rounded'>ENTER</button>
                    {row_3.map( (letter) => {
                    return (<button onClick={() => {props.handleKeypress(letter)}} className='w-10 h-14 mx-0.5 my-0.5 bg-gray-500 text-white font-bold rounded'>{letter}</button>);
                    })}
                    <button disabled={props.onSwitch} onClick={() => {props.handleDelete()}} className='w-[3.75rem] h-14 mx-0.5 my-0.5 bg-gray-500 text-white font-bold  rounded'>DEL</button>
                </div>
                
                
               
                
            </div>
            
        </div>
    );
}

export default Keyboard
