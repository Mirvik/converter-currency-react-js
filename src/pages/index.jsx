import {  Route, Routes, BrowserRouter } from 'react-router-dom';

import { Main } from './Main';

const routes = [
    {path: '/converter-currency-react-js/', element: < Main />, key: 'main_page'},
];

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((props) => <Route {...props}/> )}
            </Routes>
        </BrowserRouter>
    )
}
export { Routing };