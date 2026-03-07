import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <main>
                <Login/>
                <Profile/>
            </main>
        </>
    )
}

export default App
