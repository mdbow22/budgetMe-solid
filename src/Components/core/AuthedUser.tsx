import { Component, Show, createEffect } from 'solid-js';
import { Outlet, useNavigate } from 'solid-app-router';
import { useUser } from '../../utils/UserContext';

const Forbidden: Component = () => {
    return (
        <>
            You must be logged in to view this page.
        </>
    )
}

const AuthedUser: Component = () => {

    const { loggedIn } = useUser();
    const navigate = useNavigate();

    createEffect(() => {
        if(!loggedIn()) {
            navigate('/');
        }
    })

    return (
        <Show when={loggedIn()} fallback={<Forbidden />}>
            <Outlet />    
        </Show>
    )
}

export default AuthedUser;