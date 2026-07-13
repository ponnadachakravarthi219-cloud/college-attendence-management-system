import { useParams } from "react-router-dom";

function StudentDetails() {

  const { id } = useParams();

  return (

    <div className="container">

      <h1>Student Details</h1>

      <br />

      <h2>Student ID : {id}</h2>

      <p>

        Complete student information will appear here.

      </p>

    </div>

  );
}

export default StudentDetails;