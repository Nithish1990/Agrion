import { Avatar } from "@material-ui/core";
import { ArrowDownwardOutlined } from "@material-ui/icons";
import { MoreHorizOutlined } from "@material-ui/icons";
import { ShareOutlined } from "@material-ui/icons";
import { ArrowUpwardOutlined } from "@material-ui/icons";
import  RepeatOutlinedIcon  from "@material-ui/icons/RepeatOutlined";
import  ChatBubbleOutlineOutlinedIcon  from "@material-ui/icons/ChatBubbleOutlineOutlined";
import React from "react";
import '../CSS/Post.css'
// function Post({id,question,image,user})
function Post(){
    return(
    <div className = "post">
       <div className="post__info">
           <Avatar  />
           <h5>UserName</h5>
           <small>TimeStamp</small>
       </div>
        <div className="post__body">
            <div className="post__question">
                <p>problem</p>
                <button className="post__btnAnswer">answer</button>
            </div>         
        <div className="post__answer">
            <p>
                
            </p>   
        </div> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUy5AWfa76rWSrpE6gpgz0d00vl1WY8jFXTg&usqp=CAU"
                 alt = "arg"/>             
        </div>
        <div className="post__footer">
            <div className="post__footerActon">
                <ArrowUpwardOutlined/>
                <ArrowDownwardOutlined/>
            </div>
            <RepeatOutlinedIcon/>
            <ChatBubbleOutlineOutlinedIcon/>
            <div className="post__footerleft">
                <ShareOutlined/>
                <MoreHorizOutlined/>
            </div>
        </div>
    </div>
    );
}
export default Post