import type { Component } from 'solid-js';
import Navbar from './Components/core/Navbar';
import Landing from './Pages/Landing/Landing';

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Landing />
    </>
  );
};

export default App;
