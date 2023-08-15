import { configureStore, createSlice,PayloadAction } from "@reduxjs/toolkit";


interface userStateValue {
    username:string
}
interface userState {
    value:userStateValue
}
const userSlice = createSlice({
    name:"user",
    initialState: { value : { username : "" }} as userState,
    reducers:{
        login : (state:userState, action:PayloadAction<userStateValue>) => {    
            state.value = action.payload
        },

        logout : (state:userState) =>{
            state.value = {username : ""}
        }
    }

})

export const {login, logout} = userSlice.actions;

export const store = configureStore({
    reducer:{
        user:userSlice.reducer
    }
});