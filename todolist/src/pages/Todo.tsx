import { Container, List } from "@mui/material"
import Form from "../components/Form"
import TodoItem from "../components/TodoItem"
import { useState } from "react"

export const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        var filtrado = todos.filter((todo) => todo.id !== id);
        setTodos(filtrado);
    }

    const editTodo = (id, text) => {
        var todosArray = [...todos];

        for(var i in todosArray){
            if(todosArray[i].id == id){
                todosArray[i].text = text;
            }
        }

        setTodos(todosArray);
    }

  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}>
        <Form addTodo={addTodo} />
        <List sx={{ marginTop: '1em' }}>
            {todos.map((todo) => (
                <div key={todo.id} style={{marginTop: "1em"}}>
                    <TodoItem editTodo={editTodo} deleteTodo={deleteTodo} todo={todo}/>
                </div>
            ))}
        </List>
    </Container>
  )
}
