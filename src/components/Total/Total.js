import React from 'react';
import './Total.css';
const Total = (props) => {
    const { total } = props;
    let totalProjects = 0;
    for (const developer of total) {
        totalProjects = totalProjects + developer.projects;
    }
    return (
        <div>
            <h3>Developer Added:{props.total.length}</h3>
            <h3>Total Done Projects: {totalProjects}</h3>
            {/* <p>{props.developer.name}</p> */}
        </div>
    );
};

export default Total;