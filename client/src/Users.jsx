import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Kinjal",
      email: "kkanjiya849@rku.ac.in",
      contact: 9313183847,
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  
  return (
    
    <div className="d-flex vh-100  justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
        <table className="table table-bordered table-hover">
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>
                            <Link to={`/update/${user._id}`} className="btn btn-warning align-items-left me-2" >Update</Link>
                                <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete </button></td>
                        </tr>
                    })
                }

            </tbody>
        </table>

    </div>
    
</div>

  );
}
export default Users;
