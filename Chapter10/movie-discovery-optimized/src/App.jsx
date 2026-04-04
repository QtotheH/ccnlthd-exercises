import './App.css'

import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import MovieDiscovery from "./pages/MovieDiscovery.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";

import { Routes, Route } from 'react-router'
const App = () => {
    return  (
        <Routes>
            {/* ROOT LAYOUT ROUTE: Layout route không có thuộc tính path */}
            <Route element={<RootLayout />} >
                {/* INDEX ROUTE: Route mặc định khi URL là "/" */}
                <Route index element={<Home />} />
                {/* BASIC ROUTE */}
                <Route path="about" element={<AboutUs />} />
                {/* ROUTE PREFIX: Route chỉ có path, không có element, thêm tiền tố vào đường dẫn của các route con của nó */}
                <Route path="movies">
                    <Route index element={<MovieDiscovery />} />
                    {/* OPTIONAL SEGMENT - :category? là optional */}
                    <Route path=":category?" element={<MovieDiscovery />} />
                    {/* DYNAMIC SEGMENT - :movieId */}
                    <Route path="detail/:movieId" element={<MovieDetail />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App
