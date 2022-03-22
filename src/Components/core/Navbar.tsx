import { Link, NavLink } from "solid-app-router";
import { Component } from "solid-js";

const Navbar: Component = () => {
    return (
        
        <nav className="bg-gradient-to-bl from-green-100/80 shadow-lg text-green-600">
            <div className="py-3 px-5 flex flex-col md:flex-row items-center">
                <Link href='/'>
                    <h1 className="text-4xl md:pr-5 text-center font-bold" style='font-family: Piazzolla'>BudgetMe</h1>
                </Link>
                
                <ul className="list-none md:ml-5 md:pl-5 sm:text-xl flex md:flex-row flex-col justify-between xl:w-1/2 sm:w-1/2 lg:w-1/2 items-center">
                    <li><NavLink href='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink href='/accounts'>Accounts</NavLink></li>
                    <li>Budgets</li>
                    <li>Goals</li>
                </ul>
                <button type="button" className="md:ml-auto text-white bg-green-600 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
                </button>
            </div>
        </nav>
        
    )
}

export default Navbar;