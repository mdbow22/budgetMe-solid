import { createSignal, createContext, createResource, useContext, Accessor, Resource, Context, createEffect } from "solid-js";
//import { createStore } from "solid-js/store";
import { getToken, checkExpiration, UserType, decode } from './auth';
import API from "./api";
import { createStore } from "solid-js/store";

export type ProviderProps = {
        user: Accessor<UserType> | undefined;
        setUser: any;
        accounts: Resource<any>;
        refetchAccounts: any;
        loggedIn: Accessor<boolean>;
}

// export type UserContextType = {
//     id: symbol;
//     Provider: (props: ProviderProps) => any;
// }

const UserContext = createContext<ProviderProps>();

export const UserProvider = (props) => {

    const fetchAccounts = async () => {
        try {
            const token = getToken();

            const data = await API.get('/accounts', token);

            return data;
            
        } catch (err) {
            console.log(err);
        }
        
    }

    const [user, setUser] = createSignal<UserType | undefined>(decode());
    const [accounts, {refetch: refetchAccounts}] = createResource(user(), fetchAccounts);
    const [loggedIn, setLoggedIn] = createSignal<boolean>(false);

    createEffect(() => {
        console.log('triggered');
        if(user() && checkExpiration(user())) {
            console.log(user());
            console.log(checkExpiration(user()));
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    })

    const userStore = {
        user,
        setUser,
        accounts,
        refetchAccounts,
        loggedIn,
    }

    // const userStore = [
    //     {
    //         user: user,
    //         setUser: setUser,
    //     },
    //     {
    //         accounts,
    //         refetchAccounts,
    //     }
    // ]
    return (
        <>
        <UserContext.Provider value={userStore}>
           {props.children}
        </UserContext.Provider>
        </>
    )
}

export const useUser = () => useContext<ProviderProps>(UserContext);