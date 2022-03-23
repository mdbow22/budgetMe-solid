import { Component, createSignal, createEffect, Show } from "solid-js";
import { createStore } from 'solid-js/store';
import { useNavigate } from "solid-app-router";
import { Link } from "solid-app-router";
import { validEmail, validPW } from "../../utils/validation";
import Auth from "../../utils/auth";
import TextInput from "../../Components/core/formInputs.tsx/TextInput";
import SubmitBtn from "../../Components/core/formInputs.tsx/SubmitBtn";

const Signup: Component = () => {

    const navigate = useNavigate();

    const [form, setForm] = createStore({
        username: '',
        email: '',
        password: '',
    });

    const [invalidUsername, setInvalidUsername] = createSignal(false);
    const [invalidEmail, setInvalidEmail] = createSignal(false);

    const updateForm = (field, e) => {
        setForm(field, e.target.value);
    }

    const signUpUser = async (e) => {
        setInvalidEmail(false);
        setInvalidUsername(false);
        e.preventDefault();
        if(validEmail(form.email) && validPW(form.password)) {
            try {
                const response = await fetch('/api/user/create', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(form),
                });
                
                let data;
                if(response.status === 201) {
                    data = await response.json();
    
                    Auth.login(data.token);
                    navigate('/dashboard');
                } else {
                    data = await response.json();

                    if(data[0].path === 'username') {
                        setInvalidUsername(true);
                    } else if (data[0].path === 'email') {
                        setInvalidEmail(true);
                        console.log(data.path);
                    }
                }
            } catch (err) {
                console.log(err);
            }
            
            
        } else {
            console.log('error!');
        }
    }

    return (
        <div className='mx-auto border max-w-lg mt-20 p-4 bg-gradient-to-bl from-green-50 shadow-lg'>
            <form onSubmit={signUpUser}>
                <h2 className="text-3xl text-green-600 font-bold">Sign Up</h2>
                <div className='mt-3'>
                    <TextInput
                        required
                        onInput={(e) => updateForm('username',e)}
                        value={form.username}
                        placeholder='username'
                        name='newUserUsername'
                        labelText='Username'
                        type='text'
                        />
                    <Show when={invalidUsername()}>
                        <p className='text-xs mb-2 -mt-1 text-red-500'>Username is already taken</p>    
                    </Show>
                    <TextInput
                        required
                        onInput={(e) => updateForm('email',e)}
                        value={form.email}
                        placeholder='you@email.com'
                        name='newUserEmail'
                        labelText='Email'
                        type='email'
                        />
                    <Show when={invalidEmail()}>
                        <p className='text-xs mb-2 -mt-1 text-red-500'>You've already signed up with this email</p>    
                    </Show>
                    <TextInput
                        required
                        onInput={(e) => updateForm('password',e)}
                        value={form.password}
                        placeholder='password'
                        name='newUserPassword'
                        labelText='Password'
                        type='password'
                        />
                    <p className='text-xs mb-2 -mt-1'>8 characters with an uppercase, lowercase, number, and symbol</p>
                    <div className='flex justify-between mt-5'>
                        <SubmitBtn />
                        <Link href='/login'>
                        <button type='button' className='text-violet-600'>Login Instead</button>
                        </Link>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default Signup;