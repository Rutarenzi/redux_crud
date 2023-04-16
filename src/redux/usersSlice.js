import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    { id: "1", name: "Ruta renzi", email:"rutarenzi@gmail.com"},
    { id: "2", name: "Ruta axce34", email: "rutaaxcel@gmail.com"},
]
const usersSlice = createSlice({
    name: "users",
    initialState,
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
});

export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;
