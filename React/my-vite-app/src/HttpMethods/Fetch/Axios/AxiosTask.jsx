import React from "react";
import { useState } from "react";
import axios from "axios";
const AxiosTask = () => {
    const [user, setuser] = useState([]);
    
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setuser(res.data))
        .catch((err) => console.log(err));
    };
    const deleteData = (id) => {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setuser(user.filter(item => item.id !== id)))
      .catch((res) => console.log("Deleted Successfully !!"));
    }
  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td></td>
              <td> <button className="bg-red-400 hover:bg-red-500" onClick={() => deleteData(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={fetchData}>Fetch Users</button>
    </div>
  );
};

export default AxiosTask;
