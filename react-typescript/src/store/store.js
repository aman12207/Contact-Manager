import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactReducer } from "../reducers/contactReducer";

const reducer = combineReducers({
  contacts: contactReducer,
});
const middleware = [thunk];
const store = createStore(
  reducer,
  { },
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
