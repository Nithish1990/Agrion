import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import '../CSS/AgriBox.css'
import { selectUser } from "../feature/userSlice";
function AgriBox(){
    const user = useSelector(selectUser);
    return(
    <div className = "agriBox">
        <div className="agriBox__info">
            <Avatar src = {user.photo} />
            <h3>{user.displayName}</h3>
        </div>
        <div className="agriBox__agri">
            <p>what problem ?</p>
        </div>
    </div>
    )
}
export default AgriBox