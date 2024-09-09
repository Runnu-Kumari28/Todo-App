import React from 'react'; 
import './style.css';
function TodoForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className='formElements'>
            <label htmlFor='todo'>
                <input 
                    type='text'
                    name='todo'
                    id='todo'
                    placeholder='Enter your Task'
                />
            </label>
            <label htmlFor='desc'>
                <input 
                    type='text'
                    name='desc'
                    id='desc'
                    placeholder='Task Description'
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default TodoForm;