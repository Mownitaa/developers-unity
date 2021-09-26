import { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import Total from '../Total/Total';
import './Container.css';
const Container = () => {
    const [developers, setDevelopers] = useState([]);
    const [total, setTotal] = useState([]);
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, [])

    const handleAdd = (developer) => {
        // console.log(developer);
        const newTotal = [...total, developer];
        setTotal(newTotal);
    }
    return (
        <div className="container">
            <div className="developers-container">

                {
                    developers.map(developer => <Developer
                        key={developer.id}
                        developer={developer}
                        handleAdd={handleAdd}
                    ></Developer>)
                }
            </div>
            <div className="total-container">
                <Total total={total}></Total>
            </div>
        </div>
    );
};

export default Container;