import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import './Developer.css';
const Developer = (props) => {
    // console.log(props.developer)
    const { name, id, email, type, projects, img } = props.developer;
    const codeIcon = <FontAwesomeIcon icon={faCode} />
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
            >  <span>{codeIcon}</span> Click to Add</button>
            <h1><i className="fas fa-laptop-code"></i>
                <i className="fab fa-github"></i></h1>

        </div >
    );
};
export default Developer;