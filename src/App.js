import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import componentA from "./components/ComponentA";
import componentB from "./components/ComponentB";

function App() {
    const [showComponentA, setShowComponentA] = useState(true);
    const [showComponentB, setShowComponentB] = useState(false);

    const toggleComponentA = () => {
        setShowComponentA(!showComponentA);
        setShowComponentB(!showComponentB);
    };
    const toggleComponentB = () => {
        setShowComponentA(!showComponentA);
        setShowComponentB(!showComponentB);
    };
  return (
      <div className="App">
          <ComponentA toggleComponentB={toggleComponentB} show={showComponentA} />
          <ComponentB toggleComponentA={toggleComponentA} show={showComponentB} />
      </div>
  );
}

export default App;