export type User = {
  name: string;
  title: string;
};
export const getUser = async () => {
  try {
    const response = await fetch("/users");
    const users = await response.json();
    return users as User[];
  } catch (error) {
    console.log("error", error);
  }
};
