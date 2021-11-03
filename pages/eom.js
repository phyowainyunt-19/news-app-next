import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';

export const EOM = ({ employee }) => {
    return (
        <>
            <Head>
                <title>Employee Of The Month</title>
                <meta
                    name="description"
                    content={`This month's employee of the month is ${employee.name}`}
                />

                <meta property="og:image" content={employee.image} />
                <meta property="og:title" content="Employee Of The Month" />
                <meta
                    property="og:description"
                    content={`This month's employee of the month is ${employee.name}`}
                />

                <meta property="facebook:image" content={employee.image} />
                <meta property="facebook:title" content="Employee Of The Month" />
                <meta
                    property="facebook:description"
                    content={`This month's employee of the month is ${employee.name}`}
                />
            </Head>
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
        </>
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
