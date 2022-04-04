import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../../images/icons/home.svg";
import MapIcon from "../../images/icons/map.svg";
import AddIcon from "../../images/icons/add.svg";
import UserIcon from "../../images/icons/user.svg";
import "./style.css";

const NavBar = () => {
    return (
        <footer>
            <nav>
                <Link to="/products"><img src={HomeIcon}/></Link>
                <Link to="map"><img src={MapIcon}/></Link>
                <Link to="/new"><img src={AddIcon}/></Link>
                <Link to="/profile"><img src={UserIcon}/></Link>
            </nav>
        </footer>
    );
};

export default NavBar;
