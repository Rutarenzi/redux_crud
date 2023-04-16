/* eslint-disable no-undef */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";
import { userUpdated } from "../../redux/usersSlice"; 

export function EditUser(){
    const { pathname } = useLocation();
    const userId = pathname.replace("/edit-user/","");
    const user = useSelector(
        (state)=>state.users.find((user)=> user.id === userId) 
    )
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ name, setName ] = useState(user.name);
    const [ email, setEmail ] = useState(user.email);
    const [error, setError ] = useState(null);

    const handleName = () =>setName(e.target.value);
    const handleEmail = (e) =>setEmail(e.target.value);
    
    const handleClick =() =>{
        if(name && email ){
            dispatch(
                userUpdated({id: userId,name,email,})
            );
         setError(null);
         navigate("/");
        } else {
            setError("fill in all fields")
        }
        setEmail("");
        setName("");
    };
   
    return(
        <div className="container">
           <div className="row">
               <h1>Edit User</h1>
           </div>
           <div className="row">
           <div className="three columns">
             <label htmlFor="nameInput">Name</label>
             <input
                className="u-full-width"
                type="text"
                placeholder="test@gmail.com"
                id="nameinput"
                onChange={handleName}
                value={name}
                />
                <label htmlFor="emailInput">Email</label>
                <input
                    className="u-full-width"
                    type="email"
                    placeholder="tesst@gmail.com"
                    id="emailInput"
                    onChange={handleEmail}
                    value={email}
                />
                {error && error}
                <button onClick={handleClick} className="button-primary">Save user</button>
           </div>

           </div>
        </div>
    );
}