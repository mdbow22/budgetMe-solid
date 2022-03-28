import { Component, Show, createEffect, Accessor } from 'solid-js';
import { Outlet, useNavigate } from 'solid-app-router';
import { useUser } from '../../utils/UserContext';
import Sidebar from '../Sidebar';

type AuthedUserType = {
    showMenu: Accessor<boolean>;
    setShowMenu: any;
}

const Forbidden: Component = () => {
    return (
        <>
            You must be logged in to view this page.
        </>
    )
}

const AuthedUser: Component<AuthedUserType> = (props) => {

    const { loggedIn } = useUser();
    const navigate = useNavigate();

    

    createEffect(() => {
        if(!loggedIn()) {
            navigate('/');
        }
    })

    return (
        
        <Show when={loggedIn()} fallback={<Forbidden />}>
            <div className='h-full'>
                <Sidebar showMenu={props.showMenu} setShowMenu={props.setShowMenu} />
                <Outlet /> 
            </div>
        </Show>
    )
}

export default AuthedUser;