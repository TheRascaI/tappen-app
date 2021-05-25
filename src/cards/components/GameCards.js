import React from 'react';
import TinderCard from 'react-tinder-card';
import Card from '../../shared/components/UIElements/Card';
import flag from '../../assets/svg/flag.svg';
import './GameCards.css';

const GameCards = props =>{
        const createCards = (data, index) =>{

            return   <TinderCard
            className='swipe'
            key={index} >
          <Card className="game-card">
          <div className="game-card__content">
          <p>{data.content}</p>
          </div>
          <div className="game-card__footer">
          <div className="game-card__footer_left">@{data.creator.name}</div>
              <div className="game-card__footer_right"><img src={flag} alt="flag" width="15px" /></div>
          </div>        
               
            </Card>
      
          
          </TinderCard>
        }
    
        return (
    

            <div className="card-container">
       {props.items.sort(() => { return 0.5 - Math.random() }).map(createCards)}
        </div>)
    
    

};

export default GameCards;