import React from 'react';

const RedButton = ({ aRandomEventHandlerName }) => {
    return (
        <button onClick={aRandomEventHandlerName}>
            Red
        </button>
    )
}

export default RedButton;