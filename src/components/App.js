import React from "react";
import Header from "./Header";
import '../assets/index.css'
import Guys from "./Guys";
import Shop from "./Shop";
import Catchup from "./Catchup";

function App() {

    return (
    <div className="app">
        <Header/>
        <Guys/>
        <Shop/>
        <Catchup/>
    </div>
    );
}

export default App;