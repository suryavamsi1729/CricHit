import { createSlice, configureStore } from "@reduxjs/toolkit";

// Initial state as an array
const State = [
  {
    id: 1,
    info: {
      Name: 'surya',
      Email: 'suryavamsi2005doddi@gmail.com',
      Password: 'Surya@123'
    },
    islogin: false
  }
];

const sliceSignUp = createSlice({
  name: "User",
  initialState: State,
  reducers: {
    Add_User: (state, action) => {
      const newUser = {
        id: state.length + 1, // create a unique ID based on length
        info: action.payload,
        islogin:false,
      };
      return [...state, newUser]; // return a new state with the added user
    },
    login_User: (state, action) => {
      return state.map((user, index) => 
        index === action.payload - 1 
          ? { ...user, islogin: true } // Return a new updated object
          : user
      );
    }
  }
});

const signUpStore = configureStore({
  reducer: {
    User: sliceSignUp.reducer, // register the slice reducer
  }
});

export default signUpStore;
export const { Add_User,login_User } = sliceSignUp.actions;
