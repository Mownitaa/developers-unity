import React from 'react';
import './Name.css';
const Name = (props) => {
    const { name } = props.name;
    return (
        <div>
            <h4 className="names">{name}</h4>
        </div>
    );
};

export default Name;