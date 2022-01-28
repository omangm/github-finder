import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";

import { GithubProvder } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
  return (
    <GithubProvder>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvder>
  );
}

export default App;
