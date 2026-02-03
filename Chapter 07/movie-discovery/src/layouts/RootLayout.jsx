import {NavLink, Outlet} from "react-router";
const RootLayout = () => {
    return (
        <div>
            {/* Navigation với NavLink - tự động có class "active" khi match */}
            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/about">
                    About Us
                </NavLink>
                <NavLink to="/movies">
                    Movie Discovery
                </NavLink>
            </nav>

            {/* Outlet sẽ render child route được match */}
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default RootLayout
