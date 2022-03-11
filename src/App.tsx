import axios from "axios";
import { useState } from "react";
import { Todo } from "../src/Todo";

import "./styles.css";
import { TodoType } from "./types/todo";
import { Text } from "./Text";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        setTodos(res.data);
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
    </div>
  );
}
