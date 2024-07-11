import { getSession } from "../../lib/features/auth/authConfig";
import UsersList from "./components/UsersList";
import UnauthorisedUserError from "./components/UnauthorisedUserError";

const UsersPage = async () => {
  const session = await getSession();

  if (!session) {
    return <UnauthorisedUserError />;
  }

  return <UsersList />;
};

export default UsersPage;
