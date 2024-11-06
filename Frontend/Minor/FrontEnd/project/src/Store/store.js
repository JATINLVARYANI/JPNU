import { configureStore } from '@reduxjs/toolkit';
import formReducer from "../FormTesting/formSlice"
// import reducer from '../Pages/auth';
import authReducer from "../Pages/auth";
import userReducer from "../Pages/user";

const store = configureStore({
  reducer: {
    form: formReducer,
    auth : authReducer , 
    user : userReducer
  },
});

export default store;
