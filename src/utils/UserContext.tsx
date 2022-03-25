import { Component, createContext, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import { getToken, checkExpiration, UserType, decode } from './auth';
import API from "./api";

export const UserContext = createContext();

type UserProviderType = {
    props: {
        children: any
    }
}

const UserProvider: Component<UserProviderType> = (props) => {

    const token: UserType = decode();
    const isExpired = checkExpiration(token);

    const fetchAccounts = async () => {
        try {
            const accounts = await API.get('/accounts', getToken())
        
            return accounts;
        } catch (err) {
            console.log(err);
        }
    }
    
    const [user, setUser] = createStore<UserType | null>(isExpired ? token : null);

    const [accounts, {refetch: refetchAccounts}] = createResource(fetchAccounts)

    const userStore = {
        user,
        setUser,
        userAccts: {
            accounts,
            refetchAccounts,
        },
    }

    return (
        <UserContext.Provider value={userStore}>
            {props.children}    
        </UserContext.Provider>
    )
}