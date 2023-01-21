import { useQuery } from "react-query";
import { getUser } from "../services/UserService";

export const useGetUsersV3 = () => {
  const query = useQuery({
    // key for getting data out of cache if its in there. Kind of like a key-value store
    queryKey: ["users"],
    queryFn: () => {
      return getUser();
    },
    //   onSuccess: () => {
    //     console.log(
    //       "do something is successful like show a success message in UI"
    //     );
    //   },
    //   onError: () => {
    //     console.log(
    //       "show error message in UI"
    //     );
    //   },
  });

  return query;
};
