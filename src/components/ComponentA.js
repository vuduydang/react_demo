import React from 'react';

const ComponentA = ({ toggleComponentB, show }) => {
    return (
        <div className={`component ${ show ? '' : 'move-to-left'} container-fluid bg-success vh-100`}>
            <h1>Component A</h1>
            <p>This is Component A.</p>
            <button onClick={toggleComponentB}>Show Component B</button>
        </div>
    );
}

export default ComponentA;