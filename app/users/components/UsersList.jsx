"use client";

import { useEffect } from "react";
import UsersListItem from "./UsersListItem";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { setUsers } from "../../../lib/features/users/usersSlice";
import { filterData } from "../../util/filterData";

const UsersList = ({ users }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUsers(users));
  }, [dispatch, users]);

  const filterCriteria = user => {
    return (
      user.first_name.toLowerCase().startsWith("g") ||
      user.last_name.toLowerCase().startsWith("w")
    );
  };

  const usersList = filterData(
    useAppSelector(state => state.users),
    filterCriteria
  );

  return (
    <div
      data-testid="users-list"
      className="container mx-auto my-8 flex flex-grow flex-col"
    >
      {usersList.map(user => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
