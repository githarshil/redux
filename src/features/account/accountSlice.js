const InitialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function reducerAccount(state = InitialStateAccount, action) {
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
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
      };
    default:
      return state;
  }
}
export function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}
export function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}
export function payLoan(amount) {
  return {
    type: "account/payLoan",
    payload: amount,
  };
}

export function requestloan(amount, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, loanPurpose },
  };
}
