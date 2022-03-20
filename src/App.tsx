import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import Navbar from './Components/core/Navbar';
import Landing from './Pages/Landing/Landing';

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
