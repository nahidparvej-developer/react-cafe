import { useEffect, useState } from "react";
import blog from "./blog";
import Blog from "./blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div>
            <h2>Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;