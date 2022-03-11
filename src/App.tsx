import axios from "axios";
import { useState } from "react";
import { Todo } from "../src/Todo";

import "./styles.css";
import { TodoType } from "./types/todo";
import { User } from "./types/api/user";
import { Text } from "./Text";
import { UserCard } from "./components/UserCard";
import { userProfile } from "./types/userProfile";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        setTodos(res.data);
      });
  };

  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const onClickFetchUserData = () => {
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

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get</button>
      {todos.map((todo: TodoType) => (
        <Todo key={todo.id} {...todo} />
      ))}
      <Text color="red" fontSize="x-large">
        aaa
      </Text>
      <p style={{ color: "red", fontSize: "x-large" }}>test</p>
      <br />
      <button onClick={onClickFetchUserData}>Get</button>

      {isLoading
        ? "loading"
        : isError
        ? "error"
        : userProfiles.map((userProfile) => (
            <UserCard key={userProfile.id} user={userProfile} />
          ))}
    </div>
  );
}
