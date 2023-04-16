import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const  UserList = () =>{
    const users = useSelector((state)=>state.users);
return(
  <div className="container">
      <div className="row">
         <h1>Redux CRUD USER app</h1>
      </div>
      <div className="row">
         <div className="two columns">
             <buttom className="button-primary">Load users </buttom>
             <button className="two columns">Add user</button>
         </div>
      </div>
      <div className="row">
          <table class="u-full-width">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {users.map(
                ({id, name, email},i) =>(
                    <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                        <button>Delete</button>
                      <Link to={`/edit-user/${id}`}><button>Edit</button></Link>  
                    </td>
                </tr>
                )
                )
                }
                
            </tbody>
          </table>
      </div>
  </div>
);
}; 