import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PurchasingProcess } from "./pages/PurchasingProcess";
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
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
