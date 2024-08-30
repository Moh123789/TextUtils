// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";
import Alert from './components/Alert';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showalert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setToggleText('Enable Light Mode');
      document.body.style.backgroundColor = '#1d2749';
      document.body.style.color = 'white';
      showalert("Dark Mode has been Enabled", "success");
      document.title = "Dark Mode ON";
    }
    else {
      setMode('light');
      setToggleText('Enable Dark Mode');
      document.body.style.backgroundColor = '#e5e2e2';
      document.body.style.color = 'black';
      showalert("Light Mode has been Enabled", "success");
      document.title = "Light Mode ON";
    }
  }
  return (
   <>
      <Router>
        <Navbar title="TextUtils" about_text="About TextUtils" mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/About">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the to analyze" showalert={showalert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
