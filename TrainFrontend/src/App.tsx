import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";

import "./App.css";
import TrainList from "./components/TrainList";
import TrainDetails from "./components/TrainDetails";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light custom-bg-color">
        <div className="container">
          <Link className="navbar-brand text-light" to="/">
            Train Schedule App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  All Trains
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/train-details">
                  Get Train Details
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<TrainList />} />
          <Route path="/train-details" element={<TrainDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
