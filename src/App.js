import Button from './components/UI/buttons/buttons';
import Nav from './components/UI/nav/nav';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import About from './components/Pages/about/about';
import Contact from './components/Pages/contact/contact';
import Home from './components/Pages/home/home';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
