import React from 'react'

export const IconButton = ({app}) => {

    const{ img, href, alt, color, txt, name} = app; 
    return (
        <div>
             <a 
                href = {href}
                className = "btn login-btn"
                style={{backgroundColor: color, margin:5, display: 'block'}}
                title={txt}
            > 
                    <img src={img} alt = {alt} className='btn-icon' /> 
                    <span className='btn-txt'> {name.toUpperCase()} Login</span>
            
            </a>
        </div>
    );
};
