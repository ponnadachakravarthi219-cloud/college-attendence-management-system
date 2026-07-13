function Overview() {
  return (
    <div>

      <h1>Dashboard Overview</h1>

      <br />

      <div style={{display:"flex",gap:"20px"}}>

        <div style={{
          background:"#0d6efd",
          color:"white",
          padding:"25px",
          borderRadius:"10px"
        }}>
          <h2>Total Students</h2>
          <h1>150</h1>
        </div>

        <div style={{
          background:"green",
          color:"white",
          padding:"25px",
          borderRadius:"10px"
        }}>
          <h2>Fees Paid</h2>
          <h1>120</h1>
        </div>

        <div style={{
          background:"red",
          color:"white",
          padding:"25px",
          borderRadius:"10px"
        }}>
          <h2>Pending</h2>
          <h1>30</h1>
        </div>

      </div>

    </div>
  );
}

export default Overview;