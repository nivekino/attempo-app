import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PurchasingProcess } from "./pages/PurchasingProcess";
import { HunterTalentProcess } from "./pages/HunterTalentProcess";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <PurchasingProcess />
            </Layout>
          }
        />
        <Route
          path="/HunterProcess"
          element={
            <Layout>
              <HunterTalentProcess />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
