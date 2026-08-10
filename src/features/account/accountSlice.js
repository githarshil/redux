const InitialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
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
    case "account/converting":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
export function deposit(amount, currency) {
  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: amount,
    };
  }
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "account/converting" });
      const res = await fetch(
        `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`,
      );
      const data = await res.json();
      const convertedAmount = data?.rates?.USD ?? amount;
      console.log(convertedAmount);
      return dispatch({ type: "account/deposit", payload: convertedAmount });
    } catch (error) {
      console.error("Currency conversion failed", error);
      return dispatch({ type: "account/deposit", payload: amount });
    }
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
