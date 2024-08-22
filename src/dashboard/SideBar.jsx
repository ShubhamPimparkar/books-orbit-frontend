import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../CategoryImgs/logo2.png"

export const SideBar = () => {
    return (
    
        <Sidebar aria-label="Sidebar with content separator example" className="bg-gray-500 h-screen" >
            <Link  to="/"  >
            <img className="h-32 w-32" src={logo}/>
            
            </Link>
            <Sidebar.Items >
                <Sidebar.ItemGroup >
                  
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        Upload Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        Manage Books
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/users" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                 
                    
                    <Sidebar.Item href="/login" icon={HiTable}>
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                
            </Sidebar.Items>
        </Sidebar>
        
    )
}

