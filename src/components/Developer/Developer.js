import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import './Developer.css';
const Developer = (props) => {
    // console.log(props.developer)
    const { name, id, email, type, projects, img } = props.developer;
    const element = <FontAwesomeIcon icon={faProjectDiagram} />
    return (
        <div className="developer">
            <img className="images" src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Id: {id}</h5>
            <h3>Type: {type}</h3>
            <h5>Email: {email}</h5>
            <h3>Projects Done: {projects}</h3>
            <button
                onClick={() => props.handleAdd(props.developer)}
                className="btn"
            > <i class="fas fa-laptop-code"></i> Click to Add</button>
            {/* <h3><i class="fas fa-laptop-code"></i></h3> */}
            <h3>{element}</h3>
        </div>
    );
};

export default Developer;