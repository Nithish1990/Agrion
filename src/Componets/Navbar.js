import React, { useState } from "react";
import '../CSS/Navbar.css';
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import { Avatar, Input, Link } from "@material-ui/core";
import db, { auth } from "../firebase";
import {collection, addDoc} from'firebase/firestore'
import { ExpandMore, LinkedCamera } from "@material-ui/icons";
import { getDatabase, ref, set } from "firebase/database";
// import firebase from "firebase"
// import firebase from 'firebase/compat/app';
function Navbar(){
    const user = useSelector(selectUser)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [input, setInput] = useState("")
    const [inputUrl,setInputUrl] = useState("")
    const[i,setI] = useState(0);
    const  addEntry = async ()=> {
        try {
            const docRef = await addDoc(collection(db, "questions"), {
                // timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                // timestamp:firebase.database.ServerValue.TIMESTAMP,
                timestamp : i,
                question: input,
                imageUrl : inputUrl,
                tags:"tag",
                user : user
            });  
            setInput("");
            setI(i+1);
            setInputUrl(""); 
            setModalIsOpen(false);       
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        //   setModalIsOpen(true);
    }
    return(
        <div className = "aHeader">
            <div className = "aHeader__logo">
                <img 
                src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4EHyRSiUwx3UEEsls4YspmQVCtXskchIpw&usqp=CAU"
                alt = "agri_icon"
                />
            </div>
        <div className="aHeader__icons">
                <nav>
                    <ul class="nav-links">
                        <li><a href="http://127.0.0.1:5000/crop-recommend">Crop</a></li>
                        <li><a href="http://127.0.0.1:5000/fertilizer">Fertilizer</a></li>
                    </ul>
                </nav>
        </div>
            <div className="aHeader__input">
                <SearchIcon />
                <input type="text" placeholder="Search Query" />
            </div>
            <div className="aHeader__Rem">
                <div className="aHeader__avatar">
                <Avatar src = {user.photo} onClick={() => auth.signOut()}/>
                </div>    
                <div className="aHeader__Rem">
                    <Button onClick={
                        ()=> setModalIsOpen(true)
                        }>Add Question</Button>
                    <Modal 
                    isOpen = {modalIsOpen} 
                    onRequestClose = {()=> setModalIsOpen(false)}
                    style = {{
                        overlay:{
                        width: 700,
                        height:600,
                        backgroundcolor: "rgb(0,0,0,0.8)",
                        zIndex: "1000",
                        top:"50%",
                        left:"50%",
                        marginTop:"-300px",
                        marginLeft:"-350px",  

                        }
                    }}
                    >
                    <div className = "modal__title">
                            <h5>Add Question</h5> 
                            <h5>Share Link</h5>
                            <div classNmasame ="modal__info">
                                <Avatar className = "avatar" src = {user.photo}
                                ></Avatar>
                                <p>{user.displayName} asked </p>
                                <div className="modal__scope">
                                    <PeopleAltOutlinedIcon/>
                                    <p>Public</p>
                                    <ExpandMore/>
                                </div>
                            </div> 
                        <div className="modal__field">
                            <Input 
                                required
                                type ="text" 
                                value = {input}
                                onChange = {(e)=> setInput(e.target.value)}
                                placeholder="start your question"
                            />
                        </div>   
                        <div className="modal__fieldLink">
                            <LinkedCamera/>
                            <input
                                value = {inputUrl}
                                onChange = {(e)=> setInputUrl(e.target.value)} 
                                type ="text" 
                                placeholder="Optional:include a like that give context"
                                
                            >
                            </input>
                    </div> 
                    </div>  
                    <div  className ="modal__buttons">    
                        <button 
                         onClick={() => addEntry()}
                        className = "add">
                        Add Question</button>
                        <div>
                            <button onClick={ ()=> setModalIsOpen(false)}>close</button>
                        </div>
                    </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default Navbar