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
                path: '/home',
                element: <HomeComp/>
            }
        ]
    },
]);
export default router;