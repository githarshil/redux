const InitialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function reducerCustomer(state = InitialStateCustomer, action) {
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

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toLocaleDateString(),
    },
  };
}
export function updateCustomerName(fullName) {
  return {
    type: "customer/updateName",
    payload: { fullName },
  };
}
