import React from 'react'
import {IconButton} from './IconButton';
import {data} from "../../data";

export const ButtonList = () => {
    return data.map(app =>{
        return(
        <IconButton app= {app} key = {app.name}/>

        );
     }

    )
}
 