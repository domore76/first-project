import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post"

const MyPost = () => {
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
                <Post message='Hello, World!' likeCounts='15 '/>
                <Post message='Solo learning React!' likeCounts='20 '/>
            </div>
        </div>
    );
};

export default MyPost;
