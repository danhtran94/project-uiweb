import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  shallowEqual,
} from "react-redux";
export { createSelector } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { slice as _notUsed } from "./slices/_copy_snippet"; // dummy snippet example

// import { ws } from "./api";
// ws.onmessage = (event: MessageEvent<any>) => {
//   console.log("ws message", event);
// };

const reducer = {
  [_notUsed.name]: _notUsed.reducer, // dummy snippet example
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: {},
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const rootSelector = (state: RootState) => state;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = (
  selector,
  equalityFn = shallowEqual
) => useReduxSelector(selector, equalityFn);
