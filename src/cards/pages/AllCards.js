import React,  { useState, useEffect} from "react";
// import "./Game.css";
import CardList from "../../cards/components/CardList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

import { useHttpClient } from "../../shared/hooks/http-hook";


const Game = () => {
    const [loadedCards, setLoadedCards] = useState();
  const {isLoading, error, sendRequest, clearError} = useHttpClient();


  useEffect(() => {
    const fetchCards = async () => {
  
      try {
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + "/cards");
        setLoadedCards(responseData.cards);
      } catch (err) {
       
      }
    
    };
    fetchCards();
  }, [sendRequest]);
  console.log(loadedCards);


  const cardDeletedHandler = deletedCardId => {
    setLoadedCards(prevCards => prevCards.filter(card => card.id !== deletedCardId));
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay/>
        </div>
      )}

      {!isLoading && loadedCards && <CardList items={loadedCards}  onDeleteCard={cardDeletedHandler}/>}
    </React.Fragment>
  );


   

     
      
     
    
    
}
export default Game;