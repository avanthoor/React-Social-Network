import React from 'react';
import Post from "./Post/Post";
import classes from './Blog.module.css'

function Blog(props) {
    let postDataElements = props.posts.map( post => <Post message={post.message} likes={post.likes} /> )

    return (
        <div className={classes.blogWrapper}>
            {postDataElements}
        </div>
    );
}

export default Blog;