import { Component, Show } from "solid-js";
import { createStore } from 'solid-js/store';
import { useNavigate } from "solid-app-router";
import { Link } from "solid-app-router";
import TextInput from "../../Components/core/formInputs.tsx/TextInput";
import SubmitBtn from "../../Components/core/formInputs.tsx/SubmitBtn";

const Login: Component = () => {

    const [form, setForm] = createStore({
        username: '',
        password: '',
    });

    const loginUser = (e) => {
        e.preventDefault();
    }

    const updateForm = (field, e) => {
        setForm(field, e.target.value);
    }

    return (
        <div className='mx-auto border max-w-lg mt-20 p-4 bg-gradient-to-bl from-green-50 shadow-lg'>
            <form onSubmit={loginUser}>
                <h2 className="text-3xl text-green-600 font-bold">Login</h2>
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
                        onInput={(e) => updateForm('password',e)}
                        value={form.password}
                        placeholder='password'
                        name='newUserPassword'
                        labelText='Password'
                        type='password'
                        />
                    <div className='flex justify-between items-center mt-5'>
                        <SubmitBtn text="Login" />
                        <p className='text-sm'>Not a user yet? 
                            <Link href='/signup'>
                                <span className='text-violet-600'>Sign up!</span>
                            </Link>
                        </p>
                    </div>
                    
                </div>
                
            </form>
        </div>
    )
}

export default Login;