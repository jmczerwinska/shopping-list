import React from 'react';

const ListItem = ({ item }) => {
    return (
        <li>
            <input type="checkbox" />
            <span>{item.title}</span>
            &nbsp;
            <span>{item.quantity}{item.unit}</span>
            <div>
                <button>
                    Edit
                </button>
                <button>
                    Delete
                </button>
            </div>
        </li>
    )
}

export default ListItem;
