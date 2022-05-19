import React, { useEffect, useState } from "react";
import '../CSS/Feed.css'
import AgriBox from "./AgriBox";
import Post from "./Post";
import { getDatabase, ref, onValue} from "firebase/database";
import {collection, getDocs } from 'firebase/firestore/lite';
function Feed(){
    const[posts,setPosts] = useState([]);
    async function getQuestions(db) {
        const qCol = collection(db, 'questions');
        const qSnapshot = await getDocs(qCol);
        const qList = qSnapshot.docs.map(doc => doc.data());
        setPosts(qList);
      }
      getQuestions();
    return(
    <div className = "feed">
        <AgriBox />
        {
            posts.map(({id,question})=>
            (
                <Post
                key = {id}
                id = {id}
                image = {question.imageUrl}
                question = {question.question}
                timestamp = {question.timestamp}
                user = {question.user}
                />

            ))
}
        <Post/>
    </div>
    )
}
export default Feed
