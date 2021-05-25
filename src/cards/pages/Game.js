import React,  { useState, useEffect} from "react";
import "./Game.css";
import GameCards from "../../cards/components/GameCards";
import rewind from "../../assets/svg/rewind.svg";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import Button from "../../shared/components/FormElements/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";


const Game = () => {
    const [loadedCards, setLoadedCards] = useState();
  const {isLoading, error, sendRequest, clearError} = useHttpClient();

  

  useEffect(() => {
    const fetchCards = async () => {
  
      try {
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + "/cards/published-cards");
        setLoadedCards(responseData.cards);
      } catch (err) {
       
      }
    
    };
    fetchCards();
  }, [sendRequest]);


  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay/>
        </div>
      )}
      <div className="empty-screen">
        <p>Game Over {":("}</p>
        <Button danger to="/"><img src={rewind} width="12px" alt="restart"/> Restart</Button>
        </div> 
     
      {!isLoading && loadedCards && <GameCards items={loadedCards} />}
    </React.Fragment>
  );


   

     
      
     
    
    
}
export default Game;