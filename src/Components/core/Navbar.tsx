import { Component } from "solid-js";

const Navbar: Component = () => {
    return (
        
        <nav className="bg-gradient-to-l from-green-100/80 shadow-lg text-green-600">
            <div className="py-3 px-5 flex">
                <h1 className="text-4xl pr-5">BudgetMe</h1>
                <ul className="list-none ml-5 pl-5 text-3xl flex gap-10 items-center">
                    <li>Dashboard</li>
                    <li>Accounts</li>
                    <li>Budgets</li>
                    <li>Goals</li>
                </ul>
                <button type="button" className="ml-auto flex items-center">
                    Login
                </button>
            </div>
        </nav>
        
    )
}

export default Navbar;