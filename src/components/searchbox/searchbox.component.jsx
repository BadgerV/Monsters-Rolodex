import React from 'react'

import './searchbox.styless.css'


export const SearchBox = ({ placeHolder, handleChange}) => {
    return (
        <input className = "search" type="search" placeHolder = { placeHolder } onChange = { handleChange }></input>
    )
}