import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetcher } from "react-router-dom";

export const fetchUsers = createAsyncThunk("fetchUsers", async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
   });
// const initialState =[
//     { id: "1", name: "Ruta renzi", email:"rutarenzi@gmail.com"},
//     { id: "2", name: "Ruta axce34", email: "rutaaxcel@gmail.com"},
// ]
const usersSlice = createSlice({
    name: "users",
    initialState:{
       entities: [],
       loading: false,
    },
    reducers: {
        userAdded(state, action){
            state.push(action.payload)
        },
        userUpdated(state,action){
            const { id, name, email } = action.payload;
            const existingUser = state.find((user)=>user.id === id);
            if(existingUser){
                existingUser.name = name;
                existingUser.email = email;
            }
        },
    },
    extraReducers: {
        [fetchUsers.pending]:(state, action)=>{
            state.loading = true;
        },
        [fetchUsers.fulfilled]: (state, action)=>{
            state.loading = false;
            state.entities = [...state.entities,...action.payload];
        },
        [useFetcher.rejected]: (state, action)=>{
            state.loading = false;
        }

    }
});

export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;
