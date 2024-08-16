import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import HomeComp from "../Components/HomeComp";
import ShopComp from "../Components/ShopComp";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from '../dashboard/ManageBooks';
import EditBooks from "../dashboard/EditBooks";
import { SingleBook } from "../Components/SingleBook";
import { CartComp } from "../Components/CartComp";
import { CheckOutComp } from "../Components/CheckOutComp";
import { Login } from "../Components/Login";
import { FavouriteComp } from "../Components/FavouriteComp";
import { ManageUser } from "../dashboard/ManageUser";
import { RegisterComp } from "../Components/RegisterComp";
import { OrderPlaced } from "../Components/OrderPlaced";
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
                path: '/favs',
                element: <FavouriteComp />
            },

            {
                path: '/admin/dashboard',
                element: <Dashboard />
            },
            {
                path: '/shop',
                element: <ShopComp />
            },
            {
                path: '/cart',
                element: <CartComp />
            },
            {
                path: '/checkout/:price',
                element: <CheckOutComp />,
                loader: async ({ params }) => {
                    const price = parseFloat(params.price);
                    return { price };
                }
            },
            {
                path: '/books/:id',
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:8080/books/${params.id}`)
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,


    },
    {
        path: "/register",
        element: <RegisterComp
        />,


    },
    {
        path: "/orderplaced",
        element: <OrderPlaced
        />,


    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <UploadBooks />
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBooks />
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks />
            },
            {
                path: "/admin/dashboard/users",
                element: <ManageUser />
            },
            {
                path: "/admin/dashboard/edit/:bookId",
                element: <EditBooks />,
                loader: ({ params }) => fetch(`http://localhost:8080/books/${params.bookId}`)
            }

        ]
    }
]);
export default router;