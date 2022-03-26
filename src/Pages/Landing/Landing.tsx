import { Component, createEffect } from 'solid-js';
import { Navigate, useNavigate } from 'solid-app-router';
import { useUser } from '../../utils/UserContext';
import Hero from './components/Hero';


const Landing: Component = () => {

    const userStore = useUser();
    const navigate = useNavigate();

    createEffect(() => {
        if(userStore.loggedIn()) {
            navigate('/dashboard');
        }
    })
    
    return (
        <div className='flex flex-col max-w-5xl mx-auto px-3 py-10'>
            <Hero />
        </div>
    )
}

export default Landing;