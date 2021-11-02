export const EOM = ({ employee }) => {
    console.log(employee)
    return (
        <div className="page-container">
            <div>
                <h1>Employee Of the Month</h1>
                <div>
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
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
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
