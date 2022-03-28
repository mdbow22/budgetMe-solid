import { Route, Routes } from 'solid-app-router';
import { Component, createSignal } from 'solid-js';
import AuthedUser from './Components/core/AuthedUser';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Signup/Login';
import Signup from './Pages/Signup/Signup';
import {UserProvider} from './utils/UserContext';

const App: Component = () => {

  const [showMenu, setShowMenu] = createSignal(false);

  return (
    <>
      <UserProvider>
        <div className='min-h-screen'>
        
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
            
            <Route path='/' element={<Landing />} />
            
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<AuthedUser showMenu={showMenu} setShowMenu={setShowMenu} />} >
              {/*Where Dashboard and Accounts links will go*/}
              
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
        
        </div>
      </UserProvider>
    </>
  );
};

export default App;
