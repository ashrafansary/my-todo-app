import React from 'react'
import Todo from './Todo'

function Todos(props) {
    return (
        <>
            <ul>
                {props.todos.map((todo, id) => (
                    <Todo key={id} todo= {todo} />
                ))}
            </ul>
        </>
    )
}

export default Todos
