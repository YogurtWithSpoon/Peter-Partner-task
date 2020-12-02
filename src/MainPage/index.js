import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import CreditCard from "../components/creditcard";
import Currency from "../components/currency";
import History from "../components/history";
import axios from "axios";
import { useStateValue } from "../datalayer/stateprovider";
import { actionTypes } from "../datalayer/reducer";
import "./MainPage.css";

function MainPage() {
  const [{activeUser, activeCurrency }, dispatch] = useStateValue();
  useEffect(() => {
    axios
      .get("http://www.cbr-xml-daily.ru/daily_json.js")
      .then(function (response) {
        dispatch({
          type: actionTypes.SET_CURRENCY,
          payload: response.data.Valute,
        });
        dispatch({
          type: actionTypes.SET_CURRENTCURRENCY,
          payload: "GBP",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("http://hr.peterpartner.net/test/android/v1/users.json")
      .then(function (response) {
        dispatch({
          type: actionTypes.SET_USERS,
          payload: response.data.users,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className="MainPage">
      <NavBar name="Главная" />
      <div className="container">
        <CreditCard data={activeUser} currency={activeCurrency} />
        <Currency />
        <History
          data={activeUser?.transaction_history}
          currency={activeCurrency}
        />
      </div>
    </div>
  );
}

export default MainPage;
