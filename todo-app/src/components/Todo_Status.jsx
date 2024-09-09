import React from 'react';
import "./style.css";
function TodoStatus({task_done, total_task}) {

    return (
        <div className='statusBar'>
            <p>Task Done</p>
            <div>
                {task_done} / {total_task}
            </div>
        </div>
    );
}

export default TodoStatus;