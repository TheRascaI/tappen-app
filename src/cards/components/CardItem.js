import React,{useState, useContext} from 'react';
import Card from '../../shared/components/UIElements/Card';
import flag from '../../assets/svg/flag.svg';
import edit from '../../assets/svg/edit.svg';
import deleteIcon from '../../assets/svg/delete.svg';
import './CardItem.css';
import Button from '../../shared/components/FormElements/Button';

import Modal from '../../shared/components/UIElements/Modal';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { AuthContext } from '../../shared/context/auth-context';

import { useHttpClient } from '../../shared/hooks/http-hook';


const CardItem = (props) => {
  const auth = useContext(AuthContext);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
  
    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
      };
    
      const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
      };
    
      const confirmDeleteHandler = async () => {
        setShowConfirmModal(false);
        try {
          sendRequest(process.env.REACT_APP_BACKEND_URL + `/cards/${props.id}`, 'DELETE', null, {Authorization: 'Bearer ' + auth.token});
          props.onDelete(props.id);
        } catch (error) {
          
        }
      };
    

    return(
        <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && <LoadingSpinner asOverlay/>}

    <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>



<li className="card-item">
<Card className="game-card">
          <div className="card-item__content">
          <p>{props.content}</p>
          </div>
          <div className="card-item__footer">
          <div className="card-item__footer_top">@{props.creatorName}</div>
              <div className="card-item__footer_bottom center">
              
              <Button className="button--small" to={`/cards/${props.id}`}><img src={edit} alt="edit" width="14px" /></Button>
              <Button danger onClick={showDeleteWarningHandler}><img src={deleteIcon} alt="delete" width="14px" /></Button>
              <Button inverse > {props.reports} <img src={flag} alt="flag" width="10px" /></Button>
              
              </div>
          </div>        
               
            </Card>

</li>

        </React.Fragment>

    )
}
export default CardItem;
