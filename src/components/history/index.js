import React from "react";
import {currencySybmol} from '../../helpers/currencySymbol'
import { Scrollbar } from "react-scrollbars-custom";
import "./styles.css";

function History({ data,currency }) {
  const convertedAmount = (number, currency) => {
    return String(Number(number / currency).toFixed(2)).slice(1);
  };
  return (
    <div className="history">
      <div className="history__label">History</div>
      <div className="history__scroll">
        {data &&
          data.map((item,index) => {
            return (
              <div className="history__scroll__item" key={index}>
                {/* hardcoded img */}
                <div className="item__icon">
                <img
                  src={`./icons/${item?.title}.png`}
                  className="item__img"
                  alt={item?.title}
                />
                </div>
                <div className="item__info">
                  <div className="item__info__title">{item?.title}</div>
                  <div className="item__info__date">{item?.date}</div>
                </div>
                <div className="item__amount">
                  <div className="item__amount__converted">
                    <div className="amount__converted__label">
                      {item.amount.slice(0, 1) + ` ${currencySybmol(currency?.CharCode)}`}
                    </div>
                    <div className="amount__converted__value">
                      {convertedAmount(item?.amount, currency?.Value)}
                    </div>
                  </div>
                  <div className="item__amount__value">
                    ₽ {item.amount.slice(1)}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

    </div>
  );
}

export default History;
