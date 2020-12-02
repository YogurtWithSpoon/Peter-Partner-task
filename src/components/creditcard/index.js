import React from "react";
import {svgGenerator} from '../../helpers/svg'
import {currencySybmol} from '../../helpers/currencySymbol'
import { useHistory } from "react-router-dom";

import './styles.css';

function CreditCard({data,currency}) {
  const history = useHistory();
  const HandleClick = () => {
    history.push('/selectuser')
  }
  const convertedValue = String((data?.balance / currency?.Value).toFixed(2)).replace('.',',')
  function numberWithSpaces(x) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : null;
  }
  return (
    <div className="card" onClick={HandleClick}>
      <div className="card__row">
        {svgGenerator(data?.type)}
        <div className="card__number">{data?.card_number}</div>
      </div>
      <div className="card__row">
        <div className="card__holder">
          {svgGenerator('AccountIcon')}
          <div className="card__holder__name">{data?.cardholder_name}</div>
        </div>
        <div className="card__valid">
          <div className="card__valid__label">valid thru</div>
          <div className="card__valid__date">{data?.valid}</div>
        </div>
      </div>
      <div className="card__row">
        <div className="card__balance__converted">
          {currencySybmol(currency?.CharCode) + numberWithSpaces(convertedValue)}
        </div>
        <div className="card__balance">
          <div className="card__balance__label">Your balance</div>
          <div className="card__balance__value">{`₽${numberWithSpaces(data?.balance)}`}</div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
