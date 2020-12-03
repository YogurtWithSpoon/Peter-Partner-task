import React, { useEffect } from "react";
import NavBar from "../../components/navbar";
import CreditCard from "../../components/creditcard";
import Currency from "../../components/currency";
import History from "../../components/history";
import axios from "axios";
import { useStateValue } from "../../datalayer/stateprovider";
import { actionTypes } from "../../datalayer/reducer";
import "./mainpage.css";

function MainPage() {
  const [{ activeUser, activeCurrency }, dispatch] = useStateValue();
  
  const fetchCurrency = async () => {
    try {
      const response = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
      const data = response.data.Valute
      dispatch({
        type: actionTypes.SET_CURRENCY,
        payload: data,
      });
      dispatch({
        type: actionTypes.SET_CURRENTCURRENCY,
        payload: "GBP",
      });
    } catch(err){
      console.log(err)
    }
  };

  const fetchUsers = async () => {
    try{
      const response  = await axios.get("https://hr.peterpartner.net/test/android/v1/users.json")
      const data = response.data.users
      dispatch({
        type: actionTypes.SET_USERS,
        payload: data,
      });
    } catch(err){
      console.log(err)
    } finally {
      dispatch({
        type: actionTypes.SET_ACTIVEUSER,
      });
    }
  }

  useEffect(() => {
    fetchCurrency();
    fetchUsers();
  }, []);

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
