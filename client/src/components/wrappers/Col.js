import React from 'react'

export const Col = ({children, style, className}) => {
    return (
        <div className={`col ${className}`} style={style}>
            {children} 
        </div>
    )
}
