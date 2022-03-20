import { Link, NavLink } from "solid-app-router";
import { Component } from "solid-js";

const Navbar: Component = () => {
    return (
        
        <nav className="bg-gradient-to-l from-green-100/80 shadow-lg text-green-600">
            <div className="py-3 px-5 flex flex-col md:flex-row">
                <Link href='/'>
                    <h1 className="text-4xl pr-5 text-center">BudgetMe</h1>
                </Link>
                
                <ul className="list-none md:ml-5 md:pl-5 sm:text-xl flex md:flex-row flex-col  justify-between xl:w-1/2 sm:w-1/2 lg:w-1/2 items-center">
                    <li><NavLink href='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink href='/accounts'>Accounts</NavLink></li>
                    <li>Budgets</li>
                    <li>Goals</li>
                </ul>
                <button type="button" className="md:ml-auto">
                    Login
                </button>
            </div>
        </nav>
        
    )
}

export default Navbar;