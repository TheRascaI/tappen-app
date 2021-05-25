import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_MAXLENGTH
  } from '../../shared/util/validators';
  import {AuthContext} from '../../shared/context/auth-context';
  import { useForm } from '../../shared/hooks/form-hook';
  import { useHttpClient } from '../../shared/hooks/http-hook';
  import './NewCard.css';
import Card from '../../shared/components/UIElements/Card';

  const NewCard = () =>{
      const auth = useContext(AuthContext);
      const {isLoading, sendRequest, error, clearError} = useHttpClient();
      const [formState, inputHandler] = useForm(
          {
              content: {
                  value: "",
                  isValid: false
              }
          },false
      );
      const history = useHistory();
      const cardSubmitHandler= async event =>{
          event.preventDefault();
          try{
              await sendRequest(process.env.REACT_APP_BACKEND_URL + '/cards',
              'POST',
                JSON.stringify({
                    content: formState.inputs.content.value                }),
                {'Content-Type': 'application/json', Authorization: 'Bearer ' + auth.token}
              );
              history.push("/");
          }catch(err){

          }
      };
      return(
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && <LoadingSpinner asOverlay />}
            <div className="card-form-container">
            <Card>
                <form className="card-form" onSubmit={cardSubmitHandler}>
                <Input 
                    id="content"
                    element="textarea"
                    type="text"
                    label="Ask a Question (max. 69 characters)"
                    validators={[VALIDATOR_REQUIRE(),VALIDATOR_MAXLENGTH(69),VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter some content."
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>
                    ADD CARD
                </Button>
                </form>
            </Card>

            </div>
        </React.Fragment>

      )
  }

  export default NewCard;