import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ menu }) => {
    return (
        <>
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    {menu.map((menu, i) => {
                        return (
                            <NavLink to={menu.path} key={'links'+i}>
                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>{menu.name}</span>
                                </h6>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
