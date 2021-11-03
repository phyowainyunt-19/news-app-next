import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';

export const EOM = ({ employee }) => {
    return (
        <div className="page-container">
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee Of the Month</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3> {employee.name} </h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiRes = await fetch(
        'https://my-json-server.typicode.com/phyowainyunt-19/news-app-next/employeeOfTheMonth'
    );

    //? turns into json 
    const employee = await apiRes.json();

    return {
        props: {
            employee
        }
    }
}

export default EOM;
