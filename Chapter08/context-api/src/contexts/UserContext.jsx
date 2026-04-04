import {createContext, useState} from "react";

/* TẠO CONTEXT */
const UserContext = createContext(null);

/* TẠO PROVIDER */
const UserProvider = ({children}) => {
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (name) => {
        setUsername(name || "Username A");
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUsername("");
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={ {username, isLoggedIn, login, logout} }>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}
