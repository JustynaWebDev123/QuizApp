import React from 'react'

function ResetGame({setCountQuestion}) {
    return (
        <div><button 
        className='reset-btn' onClick={()=> setCountQuestion(1) || window.location.reload(false)}>Reset Game</button>
        </div>
    )
}

export default ResetGame
