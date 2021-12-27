import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import { AppContainer } from './mainStyled';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <h1>
        welcome to <strong>blog</strong>
      </h1>

      {/* routes */}

      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
