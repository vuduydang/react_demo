import React from 'react';

const ComponentB = ({ toggleComponentA, show }) => {
    return (
        <div className={`component ${ show ? '' : ' move-to-right'} container-fluid bg-warning vh-100`}>
            <h1>Component B</h1>
            <p>This is Component B.</p>
            <button onClick={toggleComponentA}>Show Component A</button>
        </div>
    );
}

export default ComponentB;