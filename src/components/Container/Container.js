import { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import './Container.css';
const Container = () => {
    const [developers, setDevelopers] = useState([]);
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, [])
    return (
        <div className="container">
            <div className="developers-container">

                {
                    developers.map(developer => <Developer developer={developer}></Developer>)
                }
            </div>
            <div className="total-container">
                <h4>Developers Added:</h4>
                <h3>Total Completed Projects:</h3>
            </div>
        </div>
    );
};

export default Container;