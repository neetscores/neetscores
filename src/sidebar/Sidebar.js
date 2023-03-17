import React,{ useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import {  useNavigate,Link } from "react-router-dom"
import '../App.css'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import Nav from 'react-bootstrap/Nav';


//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";

function Sidebar() {
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
      //condition checking to change state from true to false and vice versa
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate();
  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/adminlogin")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <>
    <div className='mainpage'>
    <div className="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? "HELLO" :`HELLO : ${currentUser.email}`}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                            <Nav.Link  as={Link} to={"/admin"} >Home</Nav.Link>
                            </MenuItem>
                            <MenuItem icon={<FaList />}><Nav.Link  as={Link} to={"/admin/colleges"} >colleges</Nav.Link></MenuItem>
                            <MenuItem icon={<FaRegHeart />}><Nav.Link  as={Link} to={"/admin/users"} >users</Nav.Link></MenuItem>
                            {/* <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
                            <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
            <div>
            </div>
    </div>
      
            
    </>
  )
}

export default Sidebar