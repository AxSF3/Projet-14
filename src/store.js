import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

// redux slice
import employeeReducer from "./features/employeeSlice";

const reducers = combineReducers({
  employee: employeeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

//  store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [REGISTER],
      },
    }),
  devTools: true,
});

export default store;
