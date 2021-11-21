import Button from './components/UI/buttons/buttons';
import Nav from './components/UI/nav/nav';
import Banner from './components/UI/banner/banner';
import Feed from './components/UI/feed/feed';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import About from './components/Pages/about/about';
import Contact from './components/Pages/contact/contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
