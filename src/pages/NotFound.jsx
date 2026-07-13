import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        textAlign:"center",
        marginTop:"100px"
      }}
    >

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <br />

      <button onClick={()=>navigate("/")}>
        Return Home
      </button>

    </div>

  );
}

export default NotFound;