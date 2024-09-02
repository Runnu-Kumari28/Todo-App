import React from 'react';

function TodoStatus({task_done, total_task}) {

    return (
        <>
            <p>Task Done</p>
            <div>
                {task_done} / {total_task}
            </div>
        </>
    );
}

export default TodoStatus;