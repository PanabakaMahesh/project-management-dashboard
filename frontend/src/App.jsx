import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

function App() {
  return (
    <MainLayout>
      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

      </Routes>
    </MainLayout>
  );
}

export default App;