import React from 'react'
import { CardList } from '../components/cards/CardList';


export const Home = () => {
    return (
        <div>
            <div className="page" style={{textAlign: "center" }}>
                <p className="page-title">
                    oAuth testing page  
                </p>
            
                <CardList />
                <div style={{marginBottom: 20}}/>

            </div>
        </div>
    )
}
