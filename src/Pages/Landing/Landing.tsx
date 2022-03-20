import { Component } from 'solid-js';
import Hero from './components/Hero';


const Landing: Component = () => {

    
    return (
        <div className='flex flex-col max-w-5xl mx-auto px-3 py-10'>
            <Hero />
        </div>
    )
}

export default Landing;