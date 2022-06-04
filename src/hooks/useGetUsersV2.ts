import React from "react";

export const useGetUsersV2 = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(false);

  React.useEffect(() => {
    async function getUsers() {
      setIsLoading(true);
      try {
        const response = await fetch("/users");
        const users = await response.json();
        setData(users);
        setSuccess(true);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();
  }, []);

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
