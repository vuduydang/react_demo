import React from 'react';

const ComponentA = ({ toggleComponentB, show }) => {
    console.log(show)
    return (
        <div className={` ${ show ? 'move-to-left' : 'move-to-right'} container-fluid bg-success vh-100 component`}>
            <h1>Component A</h1>
            <p>This is Component A.</p>
            <button onClick={toggleComponentB}>Show Component B</button>
        </div>
    );
}

export default ComponentA;