import { useContext } from "react";

import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  console.log(loading);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }

  // return (
  //   <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
  //     {users.map((user) => (
  //       <h3>{user.login}</h3>
  //     ))}
  //   </div>
  // );
};

export default UserResults;
