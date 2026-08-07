import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";

import Login from "../pages/Login";

function AppRoutes(){

    return(

        <BrowserRouter>

            <Routes>

                <Route path="/login" element={<Login/>}/>

                <Route element={<MainLayout/>}>

                    <Route

                        path="/"

                        element={<Dashboard/>}

                    />

                </Route>

            </Routes>

        </BrowserRouter>

    )

}

export default AppRoutes;