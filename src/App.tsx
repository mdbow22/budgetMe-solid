import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import AuthedUser from './Components/core/AuthedUser';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Signup/Login';
import Signup from './Pages/Signup/Signup';
import {UserProvider} from './utils/UserContext';

const App: Component = () => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={<Landing />} />
            
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<AuthedUser />} >
              {/*Where Dashboard and Accounts links will go*/}
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
      </UserProvider>
    </>
  );
};

export default App;
