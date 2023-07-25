import { useState, useEffect } from "react";
import axios from "axios";
import { Person } from "../../interfaces/Person";
import "./Users.css";
function Users() {
  const [users, setUsers] = useState<Person[]>([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/users");
      return data.users;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-details">
      <table className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const User = ({ user }: { user: Person }) => {
  return (
    <tr className="entries" key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.age}</td>
      <td>{user.email}</td>
      <td>
        {user.address.city} -{user.address.street} - {user.address.zipcode}{" "}
      </td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.companyName}</td>
    </tr>
  );
};

export default Users;
