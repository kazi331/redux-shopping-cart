import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, loadPosts } from '../features/blog/blogSlice';
import '../styles/blog.css'

const Blog = () => {
    const { blogs, isLoading } = useSelector(state => state.blogs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts())
    }, []);
    if (isLoading) {
        return (<div>
            <h3>Loading... </h3>
        </div>)
    }
    return (<>
        <h2 className='title'>Our Blog Posts</h2>
        <div className='post-container'>
            {
                blogs && blogs.map(post => (<div key={post.id} className="post">
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <span>{post.id}</span> <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
                </div>))
            }
        </div>
    </>
    );
};

export default Blog;