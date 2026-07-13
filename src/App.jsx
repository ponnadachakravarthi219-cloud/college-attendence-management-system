import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Students from "./pages/Students";
import Fees from "./pages/Fees";
import Settings from "./pages/Settings";
import StudentDetails from "./pages/StudentDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>

      {/* Layout */}
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="login" element={<Login />} />

        <Route path="register" element={<Registration />} />

        {/* Nested Routes */}

        <Route path="dashboard" element={<Dashboard />}>

          <Route index element={<Overview />} />

          <Route path="students" element={<Students />} />

          <Route path="fees" element={<Fees />} />

          <Route path="settings" element={<Settings />} />

        </Route>

        {/* Dynamic Route */}

        <Route
          path="student/:id"
          element={<StudentDetails />}
        />

      </Route>

      {/* 404 */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;