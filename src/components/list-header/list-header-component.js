import React from 'react';

const ListHeaderComponent = (props) => {
    return(
        <div>
            <p>Done: {props.done}</p>
            <p>{props.toDo} more to do</p>
            <p>Count of impportant tasks to do: {props.important}</p>
        </div>
    )
};

export default ListHeaderComponent;
