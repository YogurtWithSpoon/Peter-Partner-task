import React from "react";
import {svgGenerator} from '../../helpers/svg'
import {currencySybmol} from '../../helpers/currencySymbol'
import { useHistory } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
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
        <div className="card__number">{data?.card_number || <Skeleton height="25px" width="290px" />}</div>
      </div>
      <div className="card__row">
        <div className="card__holder">
          {svgGenerator('AccountIcon')}
          <div className="card__holder__name">{data?.cardholder_name || <Skeleton height="25px" width="150px" />}</div>
        </div>
        <div className="card__valid">
          <div className="card__valid__label">valid thru</div>
          <div className="card__valid__date">{data?.valid || <Skeleton height="25px" width="45px" />}</div>
        </div>
      </div>
      <div className="card__row">
        <div className="card__balance__converted">
          {data?.balance  ? (currencySybmol(currency?.CharCode) + numberWithSpaces(convertedValue)) : <Skeleton height="40px" width="130px" />}
        </div>
        <div className="card__balance">
          <div className="card__balance__label">Your balance</div>
          <div className="card__balance__value">{data.balance ? (`₽${numberWithSpaces(data?.balance)}`) : <Skeleton height="25px" width="80px" />}</div>
        </div>
      </div>
    </div>
  );
}

CreditCard.propTypes = {
  data:PropTypes.shape({
    balance: PropTypes.number,
    card_number: PropTypes.string,
    cardholder_name: PropTypes.string,
    type: PropTypes.string,
    valid: PropTypes.string
  }),
  currency:PropTypes.shape({
    Value: PropTypes.number
  })
}

export default CreditCard;
