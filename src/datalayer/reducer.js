export const initialState = {
  users: [],
  currency: [],
  activeUser: {
    card_number: "4455 1223 3488 1000",
    type: "mastercard",
    cardholder_name: "Anton Ivanov",
    valid: "12/22",
    balance: 2617.14,
    transaction_history: [
      {
        title: "Netflix",
        icon_url: "https://www.iconfinder.com/icons/143870/download/png/48",
        date: "15/12/2019",
        amount: "-9.85",
      },
      {
        title: "Dropbox",
        icon_url: "https://www.iconfinder.com/icons/245986/download/png/48",
        date: "14/12/2019",
        amount: "-15.50",
      },
      {
        title: "Dropbox",
        icon_url: "https://www.iconfinder.com/icons/245986/download/png/48",
        date: "14/12/2019",
        amount: "-15.50",
      },
    ],
  },
  activeCurrency: "",
};

export const actionTypes = {
  SET_CURRENCY: "SET_CURRENCY",
  SET_USERS: "SET_USERS",
  SET_ACTIVEUSER: "SET_ACTIVEUSER",
  SET_CURRENTCURRENCY: "SET_CURRENTCURRENCY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: { ...action.payload },
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case actionTypes.SET_ACTIVEUSER:
      return {
        ...state,
        activeUser: state?.users[action.payload.id],
      };
    case actionTypes.SET_CURRENTCURRENCY:
      return {
        ...state,
        activeCurrency: state?.currency[action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
