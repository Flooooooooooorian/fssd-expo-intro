import {createContext, useEffect, useState} from "react";
import {Character} from "./Character";
import  * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStorage from "expo-secure-store";

type AuthContextType = {
    user: string | undefined;
    login: (username: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: undefined,
    login: (username: string) => {},
    logout: () => {}
})

export default function AuthProvider({children}: {children: React.ReactNode}) {

    const [user, setUser] = useState<string>()

    const handleAuthentication = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync()
        if (hasHardware) {
            const isEnrolled = await LocalAuthentication.isEnrolledAsync();
            if (isEnrolled) {
                const authentication = await LocalAuthentication.authenticateAsync();
                if (authentication.success) {
                    SecureStorage.getItemAsync("userToken")
                        .then(token => {
                            setUser(token!)
                        })
                }
            }
        }
    }


    useEffect(() => {
        handleAuthentication()
    }, []);


    const login = ()=> {
        // fetch ...

        SecureStorage.setItemAsync("userToken", "my-secret-token")
        setUser("my-secret-token")
    }

    const logout = () => {
        SecureStorage.deleteItemAsync("userToken")
        setUser(undefined)
    }


    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
