import { User } from "./getUser";

export type UserUpdates = Partial<User> & {
  id: string;
};

export const updateUser = async (userUpdateData: UserUpdates) => {
  try {
    const response = await fetch("/users/:id", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userUpdateData),
    });
    const users = await response.json();
    return users;
  } catch (error) {
    console.log("error", error);
  }
};
