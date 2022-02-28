import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./blog.css";
import BlogDetails from './BlogDetails';
import { Button } from "@mui/material";


const BlogList = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "How to create resume", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum ........." },
        { id: 2, title: "How to create portfolio", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum  ........." },
        { id: 3, title: "How to use ml feature", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum  ........." },
        { id: 4, title: "How to earn millions ", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum  ........." },
        { id: 5, title: "How to do randi rona ", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum  ........." }
    ]);

    const [data, setData] = useState({});
    

    return (
        <div style={{ display: "flex" }}>
            <div className="blog-list  mr-4" style={{ flex: "3" }}>
                <h1 className='font-extrabold m-6'>All Blogs</h1>
                {blogs.map(blog => (
                    <Button
                       
                        onClick={() => {
                            // setId(blog.id);
                            setData(blog);
                        }}
                        color="primary"
                    >
                        <div className="blog-preview border-b-2" key={blog.id} >

                            {/* <Link to={`/blogs/${blog.id}`}> */}
                            <h2>{blog.title}</h2>
                            {/* </Link> */}
                        </div>
                    </Button>
                ))}
            </div>
            <div className="blog-details  p-2" style={{ flex: "5" }}>
                <article>
                    <h2>{data.title}</h2>
                    <div>{data.body}</div>
                </article>
            </div>
        </div>
    );
}

export default BlogList;