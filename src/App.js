import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ExtracurricularsContainer from "./Fun/ExtracurricularsContainer"


function App() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Page under construction :)</h1>

        <nav className="navigation-container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/fun">Fun</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/fun" element={< ExtracurricularsContainer />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
