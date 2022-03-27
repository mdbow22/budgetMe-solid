import { Link, NavLink } from "solid-app-router";
import { Component } from "solid-js";
import LoginPopup from './core/Popups/LoginPopup';
import { useUser } from "../utils/UserContext";

const Navbar: Component = () => {

    const userState = useUser();

    return (
        
        <nav className="bg-gradient-to-bl from-green-100/80 shadow-lg text-green-600">
            <div className="py-3 px-5 flex flex-col md:flex-row items-center">
                <Link href={userState.loggedIn() ? 'user/dashboard' : '/'}>
                    <h1 className="text-4xl md:pr-5 text-center font-bold" style='font-family: Piazzolla'>BudgetMe</h1>
                </Link>
                
                <ul className="list-none md:ml-5 p-0 md:pl-5 sm:text-xl flex md:flex-row flex-col justify-between w-full xl:w-1/2 md:w-1/2 lg:w-1/2 items-center">
                    <li className="nav-link">
                        <NavLink href='user/dashboard'>Dashboard</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink href='user/accounts'>Accounts</NavLink>
                    </li>
                    <li className="nav-link">Budgets</li>
                    <li className="nav-link">Goals</li>
                </ul>
                <div className="md:ml-auto">
                    <LoginPopup />
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar;