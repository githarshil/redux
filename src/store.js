import { combineReducers, createStore } from "redux";
const InitialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const InitialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function reducerAccount(state = InitialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/requestLoan":
      return {
        ...state,
        balance: state.balance + action.payload.loan,
        loanPurpose: action.payload.loanPurpose,
      };
    default:
      return state;
  }
}
function reducerCustomer(state = InitialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: reducerAccount,
  customer: reducerCustomer,
});
const store = createStore(rootReducer);

function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}
function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}
function payLoan(amount) {
  return {
    type: "account/payLoan",
    payload: amount,
  };
}

function requestloan(amount, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, loanPurpose },
  };
}
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toLocaleDateString(),
    },
  };
}
function updateCustomerName(fullName) {
  return {
    type: "customer/updateName",
    payload: { fullName },
  };
}
store.dispatch(deposit(1000));
