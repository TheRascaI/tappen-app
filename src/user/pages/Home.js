import React from 'react';
import TinderCard from 'react-tinder-card'
import Card from '../../shared/components/UIElements/Card';
import {useHistory} from 'react-router-dom';
import './Home.css';
const Home = () =>{
    const history = useHistory();
    const swipeHandler = async =>{
        try{
            history.push('/game')
        }catch(error){}
        
    }
    return (
    

        <div className="card-container">
    <TinderCard className="swipe"  onSwipe={swipeHandler}>
    <Card className="home-card">
            <h2>2 Rules!</h2>
            <ul style={{fontFamily:"'Nunito',sans-serif", paddingLeft:"1.2rem"}}>
                <li>Tell the truth</li>
                <li>or take a sip!</li>
            </ul>
            <h2 style={{textAlign: "center",marginTop:"4rem"}}>Swipe to start!</h2> 
         
      </Card>

    
    </TinderCard>
    </div>)
}

export default Home;