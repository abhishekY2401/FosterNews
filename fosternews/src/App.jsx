import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
import Subscribe from "./components/auth/Subscribe";
import Article from "./components/articles/Article";
import Footer from "./components/Footer";
import Register from "./components/auth/Register";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-account" element={<Register />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/:title" element={<Article />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
