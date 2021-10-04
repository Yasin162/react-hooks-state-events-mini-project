import React from 'react'

function Button({deleteTask, key }) {
    return (
        <button className="delete" onClick={deleteTask}>x
        </button>
    )
}

export default Button