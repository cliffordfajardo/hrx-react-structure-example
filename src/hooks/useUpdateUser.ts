import { useMutation } from "react-query";
import { updateUser, UserUpdates } from "../services/UserService";

export const useUpdateUser = () => {
  const mutation = useMutation({
    mutationFn: (userUpdates: UserUpdates) => {
      return updateUser(userUpdates);
    },
  });

  return mutation;
};
