import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Trends from "./Pages/Trends";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Trends />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
