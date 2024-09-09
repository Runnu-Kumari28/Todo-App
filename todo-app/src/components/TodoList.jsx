import React from 'react';
import Item from './Item.jsx';
import './style.css';
function TodoList({todos}) {
    return (
        <ol className='todoList'>
          {
            todos && todos.length > 0 ? (
                todos?.map((item, index) => <Item key={index} item={item} />)
            ) : (
                <p>Your Todo list appears here :</p>
            )
          }  
        </ol>
    )
}

export default TodoList;
