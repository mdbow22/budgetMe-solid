import { Component, Accessor } from 'solid-js';
import { Link } from 'solid-app-router';
import { DashboardIcon, AccountIcon, GoalsIcon, Clipboard } from './core/Icons';
import { useUser } from '../utils/UserContext';

type ToggleType = {
    showMenu: Accessor<boolean>;
    setShowMenu: any;
}

const Sidebar: Component<ToggleType> = (props) => {

    return (
        <aside className='min-w-68 min-h-full absolute top-o left-0 bg-green-50 text-green-700 shadow-md sidebar'
            classList={{'sidebar-open': props.showMenu()}} >
            <ul className='flex flex-col gap-2 items-center border-gray-800 mx-1 mt-3'>
                {/* <li className='border-b border-white w-full flex items-center justify-between pl-2 pb-2 relative z-50'>
                    <div> </div>
                    <button type='button' className='relative z-50' onClick={() => props.setShowMenu((prev: boolean) => !prev)}>
                        <Toggle showMenu={props.showMenu} />
                    </button>
                </li> */}
                <li className='border-b border-green-700 w-full '>
                    <Link href='/user/dashboard' onClick={() => props.setShowMenu(false)} className='flex justify-between pl-2 pb-2'>
                        <div>Dashboard</div>
                        <div className='flex justify-center w-7 px-5'>
                            <button title='Dashboard' type='button'>
                                <DashboardIcon />
                            </button>
                        </div>
                    </Link>
                </li>
                <li className='border-b border-green-700 w-full'>
                    <Link href='/user/accounts' onClick={() => props.setShowMenu(false)} className='flex justify-between pl-2 pb-2'>
                        <div>Accounts</div>
                        <div className='flex justify-center w-7 px-5'>
                            <button title='Accounts' type='button'>
                                <AccountIcon />
                            </button>
                        </div>
                    </Link>
                </li>
                <li className='border-b border-green-700 w-full flex justify-between pl-2 pb-2'>
                    <div>Budgets</div>
                    <div className='flex justify-center w-7 px-5'>
                        <button title='Budgets' type='button'>
                            <Clipboard />
                        </button>
                    </div>
                </li>
                <li className='border-b border-green-700 w-full flex justify-between pl-2 pb-2'>
                    <div>Goals</div>
                    <div className='flex justify-center w-7 px-5'>
                        <button title='Goals' type='button'>
                            <GoalsIcon />
                        </button>
                    </div>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar