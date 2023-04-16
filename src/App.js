import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import { UserList } from "./features/users/UserList";
import { AddUser } from "./features/users/AddUser";



const App =()=>{
  return(
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />}>
            
          </Route>
          <Route path="/add-user" element={<AddUser/>}>        
          </Route>
          <Route path="/edit-user" element={<h1>Edit User</h1>}>
               
            </Route>
        </Routes>
      </div>
     </Router>
  );
};

export default App;