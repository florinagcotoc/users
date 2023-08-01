import { useState, useEffect } from "react";
import axios from "axios";
import { Person } from "../../interfaces/Person";
import css from "./Users.module.css";
import DrawerPortal from "../drawer/DrawerPortal";

function UsersTable() {
  const [users, setUsers] = useState<Person[]>([]);
  const [selectedUser, setSelectedUser] = useState<Person | null>(null);

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

  const handleUserClick = (user: Person) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={css.userDetails}>
      <table className={css.userTable}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              key={user.id}
              user={user}
              onClick={() => handleUserClick(user)}
            />
          ))}
        </tbody>
      </table>
      <DrawerPortal
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      >
        {selectedUser && (
          <>
            <h1>User Details</h1>
            <p>Name: {selectedUser.name}</p>
            {/* Add other user details here */}
          </>
        )}
      </DrawerPortal>
    </div>
  );
}

function User({
  user,
  onClick,
}: {
  user: Person;
  onClick: () => void;
}): JSX.Element {
  return (
    <tr key={user.id} onClick={onClick}>
      <td>{user.id}</td>
      <td className={css.userNameTd}>{user.name}</td>
    </tr>
  );
}

export default UsersTable;
