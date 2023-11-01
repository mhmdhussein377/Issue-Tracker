import React from 'react'

const Button = ({label}) => {
    return (
        <div className="flex justify-end">
            <button className="p-1.5 px-3 border rounded-md bg-white/20 text-white">{label}</button>
        </div>
    )
}

export default Button