
import Name from '../Name/Name';
import './Total.css';
const Total = (props) => {
    console.log(props)
    const { total } = props;
    let totalProjects = 0;
    for (const developer of total) {
        totalProjects = totalProjects + developer.projects;
    }
    return (
        <div>
            <h3>Developer Added:{props.total.length}</h3>
            <h3>Total Done Projects: {totalProjects}</h3>
            {
                props.total.map(name => <Name
                    key={name.id}
                    name={name}
                ></Name>)
            }
        </div>
    );
};

export default Total;