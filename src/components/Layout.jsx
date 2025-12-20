import { Outlet } from "react-router-dom";
import React from "react";
import { Suspense } from "react";
const Header = React.lazy(()=> import("./Header"));

function Layout(){
    //returning header and outlet components
    return(<>
    <Suspense fallback={<p>Loading....</p>}>
    <Header></Header></Suspense>
    <Outlet></Outlet>
    </>)
}

export default Layout