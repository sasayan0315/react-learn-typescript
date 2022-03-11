//全ユーザー取得custom hooks
import { useState } from "react";
import { userProfile } from "../types/userProfile";
import axios from "axios";
import { User } from "../types/api/user";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getUsers = () => {
    setIsLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        const data: Array<userProfile> = res.data.map((data) => ({
          id: data.id,
          name: data.name,
          email: data.email,
          address: `${data.address.city}${data.address.street}`
        }));

        setUserProfiles(data);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { userProfiles, isLoading, isError, getUsers };
};
