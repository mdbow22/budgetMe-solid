import { Component, createSignal, Show } from "solid-js";
import { createStore } from 'solid-js/store';
import { useNavigate } from "solid-app-router";
import { Link } from "solid-app-router";
import TextInput from "../../Components/core/formInputs.tsx/TextInput";
import SubmitBtn from "../../Components/core/formInputs.tsx/SubmitBtn";
import API from "../../utils/api";
import { setToken, decode } from "../../utils/auth";
import { useUser } from "../../utils/UserContext";

const Login: Component = () => {

    const navigate = useNavigate();
    const userState = useUser();

    const [loginFailed, setLoginFailed] = createSignal<boolean>(false);
    const [errorMsg, setErrorMsg] = createSignal<string | null>(null);

    const [form, setForm] = createStore({
        username: '',
        password: '',
    });

    const loginUser = async (e: any) => {
        e.preventDefault();
        try {
            if(form.username.length === 0 || form.password.length === 0) {
                return;
            }

            const data = await API.post('/user/login', form);

            setToken(data.token);
            userState.setUser(decode(data.token));
            navigate('/dashboard');
        } catch (err) {

            if(err.message === 'invalid username/password') {
                setErrorMsg('Invalid username or password');
            } else {
                setErrorMsg('Unable to login');
            }

            setLoginFailed(true);
        }
    }

    const updateForm = (field: any, e: any) => {
        setForm(field, e.target.value);
    }

    return (
        <div className='mx-auto border max-w-lg mt-20 p-4 bg-gradient-to-bl from-green-50 shadow-lg'>
            <form onSubmit={loginUser}>
                <h2 className="text-3xl text-green-600 font-bold">Login</h2>
                <Show when={loginFailed()}>
                    <p className='text-sm mt-2 -mb-3 text-red-500'>{errorMsg}</p>
                </Show>
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