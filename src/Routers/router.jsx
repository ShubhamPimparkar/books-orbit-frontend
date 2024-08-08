import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import HomeComp from "../Components/HomeComp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomeComp />
            },
            {
                path: '/aboutus',
                element: <HomeComp />
            },
            {
                path: '/shop',
                element: <HomeComp />
            }
        ]
    },
]);
export default router;