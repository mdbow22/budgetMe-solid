import { Component, createSignal, createEffect } from "solid-js";
import { createStore } from 'solid-js/store';
import TextInput from "../../Components/core/formInputs.tsx/TextInput";
import SubmitBtn from "../../Components/core/formInputs.tsx/SubmitBtn";

const Signup: Component = () => {

    const [form, setForm] = createStore({
        username: '',
        email: '',
        password: '',
    });

    const updateForm = (field, e) => {
        setForm(field, e.target.value);
    }

    const signUpUser = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/user/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form),
        });

        const data = await response.json();

        console.log(data);
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
                    <TextInput
                        required
                        onInput={(e) => updateForm('email',e)}
                        value={form.email}
                        placeholder='you@email.com'
                        name='newUserEmail'
                        labelText='Email'
                        type='email'
                        />
                    <TextInput
                        required
                        onInput={(e) => updateForm('password',e)}
                        value={form.password}
                        placeholder='password'
                        name='newUserPassword'
                        labelText='Password'
                        type='password'
                        />
                    <div className='flex justify-between mt-5'>
                        <SubmitBtn />
                        <button type='button' className='text-violet-600'>Login Instead</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default Signup;