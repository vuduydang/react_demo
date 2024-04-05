import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
    const [showComponentA, setShowComponentA] = useState(true);
    const [showComponentB, setShowComponentB] = useState(true);
    const [loaded, setLoaded] = useState(true);

    const toggleComponentA = () => {
        setShowComponentA(!showComponentA);
        setShowComponentB(!showComponentB);
    };
    const toggleComponentB = () => {
        setShowComponentA(!showComponentA);
        if (loaded) {
            setLoaded(false)
        } else {
            setShowComponentB(!showComponentB);
        }
    };
  return (
      <div className="App">
          <ComponentB toggleComponentA={toggleComponentA} show={showComponentB} />
          <ComponentA toggleComponentB={toggleComponentB} show={showComponentA} />
      </div>
  );
}

export default App;