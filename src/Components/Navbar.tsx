import { Link, NavLink } from "solid-app-router";
import { Component, Accessor } from "solid-js";
import LoginPopup from './core/Popups/LoginPopup';
import { useUser } from "../utils/UserContext";
import { Toggle } from './core/Icons';

type NavbarType = {
    showMenu: Accessor<boolean>;
    setShowMenu: any;
}

const Navbar: Component<NavbarType> = (props) => {

    const userState = useUser();

    return (
        
        <nav className="bg-green-50 shadow-lg text-green-600">
            <div className="py-3 pl-2 pr-5 flex items-center">
                <div className='flex items-center gap-3'>
                    <button className='pt-2' type='button' onClick={() => props.setShowMenu((prev: boolean) => !prev)}
                        classList={{hidden: !userState.loggedIn()}}>
                        <Toggle showMenu={props.showMenu} />
                    </button>
                    <Link href={userState.loggedIn() ? 'user/dashboard' : '/'}>
                        <h1 className="text-4xl pr-5 text-center font-bold" style='font-family: Piazzolla'>BudgetMe</h1>
                    </Link>
                </div>
                
                
                {/* <ul className="list-none md:ml-5 p-0 md:pl-5 sm:text-xl flex md:flex-row flex-col justify-between w-full xl:w-1/2 md:w-1/2 lg:w-1/2 items-center">
                    <li className="nav-link">
                        <NavLink href='user/dashboard'>Dashboard</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink href='user/accounts'>Accounts</NavLink>
                    </li>
                    <li className="nav-link">Budgets</li>
                    <li className="nav-link">Goals</li>
                </ul> */}
                <div className="ml-auto">
                    <LoginPopup />
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar;