import { actionTypes } from "../../../datalayer/reducer";
import axios from "axios";

// tryin middlewear but its fail

export const actions = {
  fetchUsers: function () {
    return async function (dispatch) {
      try {
        const response = await axios.get(
          "https://hr.peterpartner.net/test/android/v1/users.json"
        );
        const userData = response.data.users;
        dispatch({
          type: actionTypes.SET_USERS,
          payload: userData,
        });
      } catch (error) {
        console.log(error);
      }
    };
  },
  fetchCurrency: function () {
    return async function (dispatch) {
      try {
        const response = await axios.get(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        const curencyData = response.data.Valute;
        dispatch({
          type: actionTypes.SET_CURRENCY,
          payload: curencyData,
        });
      } catch (error) {
        console.log(error);
      }
    };
  },
  setCurrency: function(){
    return function(dispatch){
        dispatch({
          type: actionTypes.SET_CURRENTCURRENCY,
          payload: "GBP",
        })
    }
  },
};
