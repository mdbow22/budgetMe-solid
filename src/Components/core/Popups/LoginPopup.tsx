import { Component, Show, createSignal } from 'solid-js';
import { Link } from 'solid-app-router';
import { useUser } from '../../../utils/UserContext';
import { removeToken } from '../../../utils/auth';

const LoginPopup: Component = () => {

    const userStore = useUser();
    const [showMenu, setShowMenu] = createSignal(false);

    const logout = () => {
        setShowMenu(false);
        userStore.setUser(undefined);
        removeToken();
    }

    return (
        <div className='relative'>
            <button type="button" onClick={() => setShowMenu((c) => !c)} className="md:ml-auto text-white bg-green-600 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
            </button>
            <div className={showMenu() ? 'login-popup' : 'login-popup hidden'}>
                <Show when={userStore.loggedIn()} fallback={
                    <ul>
                        <li className='px-4 py-2 border-b-2 hover:bg-green-50'>
                            <Link href='/login' onClick={() => setShowMenu(false)}>
                                Login
                            </Link>
                        </li>
                        <li className='px-4 py-2 hover:bg-green-50'>
                            <Link href='/signup' onClick={() => setShowMenu(false)}>    
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                }>
                    <ul>
                        <li className='px-4 py-2 hover:text-purple-500'>
                            <Link href='/' onClick={logout}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </Show>
            </div>
        </div>
    )
}

export default LoginPopup;