import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ExtracurricularsContainer from "./Fun/ExtracurricularsContainer"
import Projects from './Projects/Projects';
import ProfileSidebar from './ProfileSidebar';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Page under construction :)</h1>

        <ProfileSidebar></ProfileSidebar>

        <Routes>
          <Route path="/" element={<Projects />}></Route>
          <Route path="/fun" element={< ExtracurricularsContainer />} />
        </Routes>
      </header>
    </div >
  );
}

export default App;
