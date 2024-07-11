import UsersListItem from "./UsersListItem";
import { fetchAllDataRecursive } from "../../util/fetchData";
import { filterData } from "../../util/filterData";

const UsersList = async () => {
  const filterCriteria = user => {
    return (
      user.first_name.toLowerCase().startsWith("g") ||
      user.last_name.toLowerCase().startsWith("w")
    );
  };

  const usersList = filterData(
    await fetchAllDataRecursive("https://reqres.in/api/users"),
    filterCriteria
  );

  return (
    <div data-testid="users-list" className="container mx-auto my-8 flex flex-grow flex-col">
      {usersList.map(user => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
