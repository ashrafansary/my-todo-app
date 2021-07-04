import { Button, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import db from '../firebase'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const updateTodo = (e) => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true})
        setInput('')
        setOpen(false)
    }
    return (
        <>
        <Modal
            open={open}
            onClose={(e) => setOpen(false)}
        >     
        <div className={classes.paper}>
            <h1>I am a modal</h1>
            <input placeholder={props.todo.todos} value= {input} onChange = {e => setInput(e.target.value)} />
            <Button type="submit" onClick={updateTodo}>Update</Button>

        </div> 
         </Modal>
        <List>
            <ListItem button>
                <ListItemText primary="todo" secondary={props.todo.todos}/>
            </ListItem>
            <Button onClick = {e => setOpen(true)}>Edit</Button>
            <Button variant="contained" color="primary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>
        </List>
        </>
    )
}

export default Todo
