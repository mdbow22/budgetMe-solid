import { Component } from 'solid-js';
import undraw_investment from '../undraw_investment.svg';

const Hero: Component = () => {

    return (
        <div className='w-100 border landing-hero flex justify-between items-center py-3 bg-gradient-to-bl from-green-50 shadow-lg'>
            <div className='flex flex-col items-center justify-center w-1/2 ml-2 gap-10'>
                <h1 className='text-4xl text-center font-bold'>Take charge of your Finances</h1>
                <div className=''>
                    <div className='flex justify-center'>
                        <button className='text-2xl bg-violet-600 text-white px-4 py-2 shadow-md'>Sign Up Today</button>
                    </div>
                    
                    <div className='text-center pt-3'>Already a member? <span className='text-violet-600'>Login Here</span></div>
                </div>
            </div>
            
            <div className='hero-image pr-2'>
                <img src={undraw_investment} />
            </div>
        </div>
    )
}

export default Hero;