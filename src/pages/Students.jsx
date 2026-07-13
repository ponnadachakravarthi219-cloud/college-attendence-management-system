import { Link } from "react-router-dom";

const students = [
  {
    id:1,
    name:"Rahul",
    branch:"CSE"
  },
  {
    id:2,
    name:"Priya",
    branch:"ECE"
  },
  {
    id:3,
    name:"Kiran",
    branch:"AIML"
  }
];

function Students() {
  return (
    <div>

      <h1>Students</h1>

      <br />

      <table border="1" cellPadding="10">

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Branch</th>

            <th>View</th>

          </tr>

        </thead>

        <tbody>

          {
            students.map((student)=>(
              <tr key={student.id}>

                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.branch}</td>

                <td>

                  <Link to={`/student/${student.id}`}>
                    Details
                  </Link>

                </td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default Students;