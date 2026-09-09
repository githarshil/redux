# Redux Bank

A small banking app — open an account, deposit, withdraw, request a loan, and pay it off — built specifically to learn Redux and Redux Toolkit fundamentals with a real (if small) global state.

**Tech stack:** React (Create React App) · Redux · Redux Toolkit · React Redux · Redux Thunk

## What I Built

- **Two Redux slices** — `accountSlice.js` (balance, loan, deposit/withdraw/loan actions) and `customerSlice.js` (customer creation and details) — each with their own actions and reducers.
- **Account operations UI** (`AccountOperations.js`) — deposit, withdraw, request loan, and pay loan, all dispatching actions into the store.
- **A balance display** (`BalanceDisplay.js`) that reads directly from the Redux store via `useSelector`, no prop drilling.
- **Customer creation flow** (`CreateCustomer.js`) that has to run before account operations are enabled, modeling a real dependency between two slices of state.
- **Async logic with Redux Thunk** — for actions that need to do something asynchronous (e.g. simulate a loan approval delay) before updating the store.

## What I Learned

- **Redux's core mental model** — actions, reducers, and a single store — by building it with both classic Redux and Redux Toolkit side by side, so I could actually see how much boilerplate Toolkit removes.
- **`useSelector` and `useDispatch`** as the two hooks that connect any component to the store, instead of the old `connect()` HOC pattern.
- **Structuring state by feature (slices)** rather than one flat reducer, and why that scales better as an app grows.
- **Where thunks fit in** — handling async logic (API calls, delays) in Redux without putting async code directly inside a reducer, which has to stay a pure function.
- **When Redux is actually worth it** — this project was small enough that I could feel where global state was genuinely helpful (account balance, customer identity) versus where local component state would have been simpler.

## Getting Started

```bash
npm install
npm start
```
