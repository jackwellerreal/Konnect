import React from 'react';
import { Outlet } from "react-router-dom";

import logo from "../../img/logo.svg";
import { SideBarLeft, SideBarRight } from './SideBar';
import '../App.css';

export function LayOut() {
    return (
        <>
            <div className="main-body dark">
                <SideBarLeft />
                    <div className="main-center">
                        <Outlet />
                    </div>
                <SideBarRight />
            </div>
        </>
    )
}