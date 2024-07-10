import UsersListItem from "./UsersListItem";
import { fetchAllUsersData } from '../util/getUsers';

const UsersList = async () => {
  const usersList = filterUsers(await fetchAllUsersData());

  return (
    <div className="container mx-auto my-8">
      {usersList.map(user => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const filterUsers = users => {
  return users.filter(
    user =>
      user.first_name.toLowerCase().startsWith("g") ||
      user.last_name.toLowerCase().startsWith("w")
  );
};

export default UsersList;
