import React, { useState } from "react";
import {useStateValue} from '../../datalayer/stateprovider';
import {actionTypes} from '../../datalayer/reducer'
import "./styles.css";

function Currency() {
  const [active, setActive] = useState([true, false, false]);
  const [{},dispatch ] = useStateValue();
  return (
    <div className="currency">
      <div className="currency__label">Change currency</div>
      <div className="currency__menu">
        <button
          className={"currency__menu__item " + (active[0] && "active")}
          onClick={() => {
            setActive([true, false, false]);
            dispatch({
              type: actionTypes.SET_CURRENTCURRENCY,
              payload: "GBP"
            })
          }}
        >
          <div className="symbol">£</div>
          <div className="currency__name">gpb</div>
        </button>
        <button
          className={"currency__menu__item " + (active[1] && "active")}
          onClick={() => {
            setActive([false, true, false]);
            dispatch({
              type: actionTypes.SET_CURRENTCURRENCY,
              payload: "EUR"
            })
          }}
        >
          <div className="symbol">€</div>
          <div className="currency__name">eur</div>
        </button>
        <button
          className={"currency__menu__item " + (active[2] && "active")}
          onClick={() => {
            setActive([false, false, true]);
            dispatch({
              type: actionTypes.SET_CURRENTCURRENCY,
              payload: "USD"
            })
          }}
        >
          <div className="symbol">$</div>
          <div className="currency__name">usd</div>
        </button>
      </div>
    </div>
  );
}

export default Currency;
