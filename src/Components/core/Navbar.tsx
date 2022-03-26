import { Link, NavLink } from "solid-app-router";
import { Component, createEffect, createSignal, onMount, useContext } from "solid-js";
import { useUser } from "../../utils/UserContext";
import { decode, checkExpiration, getToken } from "../../utils/auth";

const Navbar: Component = () => {

    const userState = useUser();

    // const checkIfLogin = () => {
    //     if(userState.user() && checkExpiration(userState.user())) {
    //         console.log('ran and true');
    //         return true;
    //     }

    //     console.log('ran and false');
    //     return false;
    //}


    return (
        
        <nav className="bg-gradient-to-bl from-green-100/80 shadow-lg text-green-600">
            <div className="py-3 px-5 flex flex-col md:flex-row items-center">
                <Link href={userState.loggedIn() ? '/dashboard' : '/'}>
                    <h1 className="text-4xl md:pr-5 text-center font-bold" style='font-family: Piazzolla'>BudgetMe</h1>
                </Link>
                
                <ul className="list-none md:ml-5 p-0 md:pl-5 sm:text-xl flex md:flex-row flex-col justify-between w-full xl:w-1/2 md:w-1/2 lg:w-1/2 items-center">
                    <li className="m-3 md:my-0 md:border-0 border-b md:text-left text-center border-slate-300 w-full"><NavLink href='/dashboard'>Dashboard</NavLink></li>
                    <li className="mb-3 md:my-0 md:border-0 border-b md:text-left text-center border-slate-300 w-full"><NavLink href='/accounts'>Accounts</NavLink></li>
                    <li className="mb-3 md:my-0 md:border-0 border-b md:text-left text-center border-slate-300 w-full">Budgets</li>
                    <li className="mb-3 md:my-0 md:border-0 border-b md:text-left text-center border-slate-300 w-full">Goals</li>
                </ul>
                <div className="md:ml-auto">
                    <button type="button" className="md:ml-auto text-white bg-green-600 p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar;