import React from 'react'; 

function TodoForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>
                <input 
                    type='text'
                    name='todo'
                    id='todo'
                    placeholder='Enter your Task'
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default TodoForm;