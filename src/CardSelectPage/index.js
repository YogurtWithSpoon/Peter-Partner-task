import React from "react";
import NavBar from "../components/navbar";
import { svgGenerator } from "../helpers/svg";
import { useStateValue } from "../datalayer/stateprovider";
import './styles.css'
import { useHistory } from "react-router-dom";
import { actionTypes } from "../datalayer/reducer";

function CardSelectPage() {
  const [{users,activeUser},dispatch] = useStateValue();
  const history = useHistory();

  const handleClick = (currentCard) => {
    history.push('/')
    let newActiveUserID;
    users.forEach((item,index) => {
      if(item.card_number === currentCard){
        newActiveUserID = index;
      }
    })

    dispatch({
      type: actionTypes.SET_ACTIVEUSER,
      payload: {id:newActiveUserID}
    })
  }


  return (
    <div className="CardSelectPage">
      <NavBar name="Мои карты" redirect="/" />
      <div className="container">
        <div className="card__select">
          {users.map((item) => {
            return (
            <div className="card__select__item" key={item?.card_number} onClick={() =>{handleClick(item?.card_number)}}>
              {svgGenerator(item?.type)}
              <div className="item__number">{item?.card_number}</div>
              {item.card_number === activeUser.card_number && <div className="active__card"/>}
            </div>
          )})}
        </div>
      </div>
    </div>
  );
}

export default CardSelectPage;
