import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is amazing react course!" />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
