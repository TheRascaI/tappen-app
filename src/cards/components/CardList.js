import React from 'react';
import CardItem from './CardItem';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './CardList.css';

const CardList = props =>{  

    
     
        const createCards = (data) =>{
          const timestamp = data.createdAt.slice(0, 10);
          return(
            
                <CardItem 
                    key={data.id}
                    id={data.id}
                    content={data.content}
                    creatorId={data.creator}
                    reports={data.reports}
                    creatorName={data.creator.name || timestamp}
                    onDelete={props.onDeleteCard}

                />
            )
        }
    
        return (
          <React.Fragment>
{props.items.length === 0 && <div className="cards-list center">
            <Card>
              <h2>No cards found. Maybe create one?</h2>
              <Button to="/api/cards/new">Create Card</Button>
            </Card>
          </div>}

            <div className="card-list-container center">
      <ul className="cards-list ">
      {props.items.map(createCards)}
      </ul>
        </div>


          </React.Fragment>


)
    

    
    

}

export default CardList;