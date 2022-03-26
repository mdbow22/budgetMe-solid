import { Component, Show, createSignal } from 'solid-js';
import { useUser } from '../../../utils/UserContext';

const LoginPopup: Component = () => {

    const userStore = useUser();
    const [showMenu, setShowMenu] = createSignal(false);

    return (
        <div className='relative'>
            <button type="button" onClick={() => setShowMenu((c) => !c)} className="md:ml-auto text-white bg-green-600 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
            </button>
            <div className={showMenu() ? 'login-popup' : 'login-popup hidden'}>
                <Show when={userStore.loggedIn} fallback={
                    <ul>
                        <li className='px-4 py-2 border-b-2 hover:bg-green-50'>Login</li>
                        <li className='px-4 py-2 hover:bg-green-50'>Sign Up</li>
                    </ul>
                }>
                    <ul>
                        <li className='px-4 py-2 hover:text-purple-500'>Logout</li>
                    </ul>
                </Show>
            </div>
        </div>
    )
}

export default LoginPopup;