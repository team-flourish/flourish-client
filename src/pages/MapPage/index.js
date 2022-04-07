import React from "react";
import { Map } from "../../components";
import { Header, NavBar } from "../../layout";

import "./style.css";

const MapPage = () => {
    return (
        <>
            <Header />
            <main className="mappage">
                <Map />
            </main>
            <NavBar />
        </>
    );
};

export default MapPage;
