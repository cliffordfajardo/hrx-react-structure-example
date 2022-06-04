import React from "react";

export const useGetUsersV1 = () => {
  React.useEffect(() => {
    async function getUsers() {
      const response = await fetch("/users");
      const users = await response.json();
      console.log("users", users);
    }
    getUsers();
  }, []);
};
