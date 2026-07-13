import "./Home.css";

function Home() {
  return (
    <div className="home container">
      <h1>College Attendence Management System</h1>

      <p>
        Welcome to the College Attendence Management System.
      </p>

      <div className="home-cards">
        <div className="card">
          <h2>Students</h2>
          <p>Manage student information.</p>
        </div>

        <div className="card">
          <h2>Attendene</h2>
          <p>Track fee payments.</p>
        </div>

        <div className="card">
          <h2>Dashboard</h2>
          <p>View statistics and reports.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;