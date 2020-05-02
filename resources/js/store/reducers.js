import { combineReducers } from "redux";

import profile from "./reducers/profile";
import page from "./reducers/page";

export default combineReducers({
    profile,
    page
});
