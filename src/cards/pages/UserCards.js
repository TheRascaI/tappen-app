import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import CardList from '../components/CardList';

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const UserCards = () =>{
    const [loadedUserCards, setUserCards] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const userId = useParams().userId;
    useEffect(()=>{
        const fetchCards = async () =>{
            try{
                const responseData = await sendRequest(
                   `${process.env.REACT_APP_BACKEND_URL}/cards/user/${userId}`
                    );
                setUserCards(responseData.cards);
            
            }catch(err){

            }
        }
        fetchCards();
    },[sendRequest, userId]);

    const cardDeletedHandler = deletedCardId =>{
        setUserCards(prevCards=> prevCards.filter(card => card.id !== deletedCardId));
    };
    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && <LoadingSpinner asOverlay />}
            {!isLoading && loadedUserCards && <CardList items={loadedUserCards} onDeleteCard={cardDeletedHandler} />}
        </React.Fragment>
    )
}
export default UserCards;