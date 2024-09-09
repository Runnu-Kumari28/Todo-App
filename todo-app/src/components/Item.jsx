import React from 'react'

function Item({item}) {

    return (
        <li id={item?.id}>
            <button>
                <p>{item?.title}</p>
            </button>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    );
}
export default Item;