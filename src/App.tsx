import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import Navbar from './Components/core/Navbar';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Signup/Login';
import Signup from './Pages/Signup/Signup';

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
