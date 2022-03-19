import { Component } from 'solid-js';
import Hero from './components/Hero';


const Landing: Component = () => {

    
    return (
        <div className='flex flex-col w-4/5 mx-auto px-3 py-10'>
            <Hero />
        </div>
    )
}

export default Landing;