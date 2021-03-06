import { Link } from 'solid-app-router';
import { Component, createEffect, createSignal } from 'solid-js';
import undraw_investment from '../undraw_investment.svg';

const Hero: Component = () => {

    return (
        <div className='w-100 border landing-hero flex md:flex-row flex-col justify-center md:justify-between items-center py-3 bg-gradient-to-bl from-green-50 shadow-lg'>
            <div className='flex flex-col items-center justify-center w-1/2 ml-2 gap-10'>
                <h1 className='md:text-4xl text-3xl text-center font-bold'>Take charge of your Finances</h1>
                <div className=''>
                    <div className='flex justify-center'>
                        <Link href='/signup'>
                            <button className='md:text-2xl text-xl bg-violet-600 text-white px-4 py-2 shadow-md shadow-slate-400 active:shadow-inner active:shadow-slate-600'>Sign Up Today</button>
                        </Link>
                    </div>
                    
                    <div className='text-center pt-3'>Already a member? 
                        <Link href='/login'>
                            <span className='text-violet-600'>Login Here</span>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='hero-image px-2 md:pr-2'>
                <img src={undraw_investment} />
            </div>
        </div>
    )
}

export default Hero;