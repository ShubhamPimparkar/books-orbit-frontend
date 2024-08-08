import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import HomeComp from "../Components/HomeComp";
<<<<<<< HEAD
=======

>>>>>>> 6dca61f39224a3253b96e158abd9a9ff7ddeddd9
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
<<<<<<< HEAD
                path: '/home',
                element: <HomeComp/>
=======
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
>>>>>>> 6dca61f39224a3253b96e158abd9a9ff7ddeddd9
            }
        ]
    },
]);
export default router;