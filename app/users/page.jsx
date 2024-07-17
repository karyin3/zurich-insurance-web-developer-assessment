import { getSession } from "../../lib/features/auth/authConfig";
import UsersList from "./components/UsersList";
import UnauthorisedUserError from "./components/UnauthorisedUserError";

const UsersPage = async () => {
  const session = await getSession();

  if (!session) {
    return <UnauthorisedUserError />;
  }

  const res = await fetch(`${process.env.BASE_URL}/api/users`).then(res =>
    res.json()
  );

  return <UsersList users={res.data} />;
};

export default UsersPage;
