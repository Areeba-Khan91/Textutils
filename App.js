import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setColor('');
      showAlert("Light Mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
  }

  const toggleColor = (selectedColor) => {
    if (color === selectedColor) {
      setColor('');
      document.body.style.backgroundColor = '#042743';
    } else {
      setColor(selectedColor);
      document.body.style.backgroundColor = selectedColor;
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;