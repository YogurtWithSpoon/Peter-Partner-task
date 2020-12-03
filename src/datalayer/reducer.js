export const initialState = {
  users: [{}],
  currency: {},
  activeUser: {},
  activeCurrency: {},
  activeUserID: 0,
};

export const actionTypes = {
  SET_CURRENCY: "SET_CURRENCY",
  SET_USERS: "SET_USERS",
  SET_ACTIVEUSER: "SET_ACTIVEUSER",
  SET_CURRENTCURRENCY: "SET_CURRENTCURRENCY",
  SET_LOADING: "SET_LOADING",
  SET_ACTIVEUSERID: "SET_ACTIVEUSERID"
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
        activeUser: state?.users[state.activeUserID],
      };
    case actionTypes.SET_ACTIVEUSERID:
      return {
        ...state,
        activeUserID: action.payload
      }
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
