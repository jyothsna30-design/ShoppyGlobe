import { Outlet } from "react-router-dom";
import Header from "./Header"

function Layout(){
    //returning header and outlet components
    return(<>
    <Header></Header>
    <Outlet></Outlet>
    </>)
}

export default Layout