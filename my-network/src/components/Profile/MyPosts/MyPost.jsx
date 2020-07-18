import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post"

const MyPost = () => {

    let postData = [
        {id: 1, text: "Hi, what is you name?", likeCounts: 12},
        {id: 2, text: "Solo learning React!", likeCounts: 98},
        {id: 3, text: "Hi, what is you name?", likeCounts: 3},
        {id: 4, text: "Hi, what is you name?", likeCounts: 9},
    ]

    return (
        <div className={s.content}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message={postData[0].text} likeCounts={postData[0].likeCounts}/>
                <Post message={postData[1].text} likeCounts={postData[1].likeCounts}/>
                <Post message={postData[2].text} likeCounts={postData[2].likeCounts}/>
                <Post message={postData[3].text} likeCounts={postData[3].likeCounts}/>
            </div>
        </div>
    );
};

export default MyPost;
