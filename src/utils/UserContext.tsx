import { createSignal, createContext, createResource, useContext } from "solid-js";
//import { createStore } from "solid-js/store";
import { getToken, checkExpiration, UserType, decode } from './auth';
//import API from "./api";

const UserContext = createContext();

export const UserProvider = (props) => {

    const fetchAccounts = async () => {

    }

    const [user, setUser] = createSignal();
    const [accounts, {refetch: refetchAccounts}] = createResource(fetchAccounts)

    const userStore = [
        {
            user: user,
            setUser: setUser,
        },
        {
            accounts,
            refetchAccounts,
        }
    ]
    return (
        <>
        <UserContext.Provider value={userStore}>
           {props.children}
        </UserContext.Provider>
        </>
    )
}

export const useUser = () => useContext(UserContext);