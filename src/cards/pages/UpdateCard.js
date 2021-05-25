import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH
} from '../../shared/util/validators';
import {AuthContext} from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UpdateCard = () => {
    const auth = useContext(AuthContext);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedCard, setLoadedCard] = useState();

    const cardId = useParams().cardId;
    const history = useHistory();
    const [formState, inputHandler, setFormData ] = useForm(
        {
            content:{
                value:'',
                isValid: false
            }
        },
        false
    );

    useEffect(()=>{
        const fetchCard = async ()=>{
            try{
            const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + `/cards/${cardId}`
            );
            setLoadedCard(responseData.card);
            setFormData({
                content: {
                    value: responseData.card.content,
                    isValid: true
                }
            },
            true
            );
            }catch(err){

            }
        }
        fetchCard()
    },[sendRequest, cardId, setFormData]);

    const cardUpdateSubmitHandler = async event => {
        event.preventDefault();
        try{
            await sendRequest(
                 `${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`,
                'PATCH',
                JSON.stringify(
                    {content: formState.inputs.content.value}
                ),
                {'Content-Type': 'application/json',Authorization: 'Bearer ' + auth.token
            }
            );
            history.push('/' + auth.userId + '/cards')
        }catch(error){ }
    };

  if (!loadedCard && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find card!</h2>
        </Card>
      </div>
    );
  }
    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && <LoadingSpinner asOverlay />}
            <div className="card-form-container center">
            <Card>
                <form className="card-form" onSubmit={cardUpdateSubmitHandler}>
                <Input 
                    id="content"
                    element="textarea"
                    type="text"
                    label="EDIT (max. 69 characters)"
                    validators={[VALIDATOR_REQUIRE(),VALIDATOR_MAXLENGTH(69),VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter some content."
                    onInput={inputHandler}
                    initialValue={loadedCard.content}
                    initialValid={true}
                />
                
                <Button type="submit" disabled={!formState.isValid}>
                    UPDATE CARD
                </Button>
                </form>
            </Card>

            </div>

        </React.Fragment>
    )

}

export default UpdateCard;