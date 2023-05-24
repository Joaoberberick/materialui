import { Button, Paper, TextField } from '@mui/material'
import { useState } from 'react'

export default function  ({ addTodo }) {
    const [text, setText] = useState("");
    const [id, setId] = useState(0);

    const createTodo = (text) => {
        const obj = { text: text, id: id};
        setId(id + 1);
        addTodo(obj);
        setText("");
    }
    
    return (
        <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center"}}>
            <TextField id="outlined-basic" value={text} label="Todo" variant="outlined" onChange={(e) => setText(e.target.value)} fullWidth />
            <Button variant="text" onClick={() => createTodo(text)}>Add</Button>
        </div>
        </Paper>
    )
}
