import React from 'react';

const ComponentB = ({ toggleComponentA, show }) => {
    console.log(show)
    return (
        <div className={` ${ show ? 'move-to-right' : 'move-to-left'} container-fluid bg-warning vh-100 component`}>
            <h1>Component B</h1>
            <p>This is Component B.</p>
            <button onClick={toggleComponentA}>Show Component A</button>
        </div>
    );
}

export default ComponentB;