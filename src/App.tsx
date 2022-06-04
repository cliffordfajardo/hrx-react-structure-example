import React from "react";
import "./App.css";
import { useGetUsersV1, useGetUsersV2, useGetUsersV3 } from "./hooks";

function App() {
  // useGetUsersV1();
  // const { data, isLoading, isSuccess } = useGetUsersV2();
  const getUserInfo = useGetUsersV3();
  const users = getUserInfo.data || [];

  if (getUserInfo.isLoading) {
    return (
      <>
        <p>...loading....</p>
      </>
    );
  }
  if (getUserInfo.isSuccess) {
    return (
      <>
        <p>{JSON.stringify(users)}</p>
      </>
    );
  }
  // console.log({ data, isLoading, isSuccess });
  return <div className="App">{/* <button>Click for API call</button> */}</div>;
}

export default App;
