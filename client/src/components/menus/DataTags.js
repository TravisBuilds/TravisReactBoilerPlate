import React from 'react'

export const DataTags = ({options, onClick, selected}) => {

    const pStyle = {
        overflow: "hidden",
        textOverflow : "ellipsis",
        margin: 2,
        fontsize: 12
    }
    const allOptions = ["All", ...options]; 
    return (
        <div>
            {allOptions.map(option => {
                const extraClass = option ===selected ? "selected" : "";
            

            return(
                <div
                    key={option}
                    onClick = {()=> onClick(option)}
                    className = {`tag ${extraClass}`}
                    title = {option} 
                >

                        <p style={pStyle}>{option}</p>
                </div>
            )
        })}
        </div>
    )
}
