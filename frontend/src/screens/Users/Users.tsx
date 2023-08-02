import { useState, useEffect } from "react";
import { Person } from "../../interfaces/Person";
import css from "./Users.module.css";
import DrawerPortal from "../../components/drawer/DrawerPortal";
import { getUsers } from "../../services/utils/apis/getUsers";
import Card from "../../components/card/Card";

function Users() {
  const [users, setUsers] = useState<Person[]>([]);
  const [selectedUser, setSelectedUser] = useState<Person | null>(null);

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
    <div className={css.usersScreen}>
      {users.map((user) => (
        <Card
          data={user}
          key={user.id}
          onClick={() => handleUserClick(user)}
        ></Card>
      ))}
      <DrawerPortal
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      >
        {selectedUser && (
          <>
            <h1>User Details</h1>
            <p>Name: {selectedUser.name}</p>
            <p>Ocupation: {selectedUser.ocupation}</p>
            <p>Age: {selectedUser.age}</p>
            <p>
              Address: {selectedUser.address.street}-{selectedUser.address.city}
            </p>
          </>
        )}
      </DrawerPortal>
    </div>
  );
}

// function User({
//   user,
//   onClick,
// }: {
//   user: Person;
//   onClick: () => void;
// }): JSX.Element {
//   return <div></div>;
// }

export default Users;
