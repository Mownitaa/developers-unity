import React from 'react';
import './Developer.css';
const Developer = (props) => {
    console.log(props.developer)
    const { name, id, email, type, projects, img } = props.developer;
    return (
        <div className="developer">
            <img className="images" src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>Id: {id}</h3>
            <h3>Type: {type}</h3>
            <h3>Email: {email}</h3>
            <h3>Projects Completed: {projects}</h3>
        </div>
    );
};

export default Developer;