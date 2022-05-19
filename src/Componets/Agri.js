import React from "react";
import '../CSS/Agri.css'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
function Agri(){
    return (
        <div className = "agri">
            <Navbar />
            <div className="agri__content">
                <Sidebar/>
                <Feed/>
            </div>
       </div>
    )
}
export default Agri