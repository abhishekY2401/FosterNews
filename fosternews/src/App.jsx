import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
import Subscribe from "./components/auth/Subscribe";
import Article from "./components/articles/Article";

function App() {
  return (
    <>
      <div className="pl-32 pr-32">
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/:year/:title" element={<Article />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
