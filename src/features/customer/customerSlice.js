import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "cutomer",
  InitialState,
  reducers: {
    createCustomer(state, action) {
      InitialState.fullName = action.payload.fullName;
      InitialState.nationalID = action.payload.nationalID;
      InitialState.createdAt = new Date().toLocaleDateString();
    },
    updateCustomer(state, action) {
      InitialState.fullName = action.payload.fullName;
    },
  },
});
export const { createCustomer, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;
// export default function reducerCustomer(state = InitialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload.fullName };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       nationalID,
//       createdAt: new Date().toLocaleDateString(),
//     },
//   };
// }
// export function updateCustomerName(fullName) {
//   return {
//     type: "customer/updateName",
//     payload: { fullName },
//   };
// }
