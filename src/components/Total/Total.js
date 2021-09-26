// import React, { useEffect, useState } from 'react';
import './Total.css';
const Total = (props) => {
    const { total, developers } = props;
    let totalProjects = 0;
    for (const developer of total) {
        totalProjects = totalProjects + developer.projects;
    }
    return (
        <div>
            <h3>Developer Added:{props.total.length}</h3>
            <h3>Total Done Projects: {totalProjects}</h3>
            {
                developers.map(developer => console.log(developer.name))
            }
        </div>
    );
};

export default Total;