import React, { useState } from "react";
import "./blog.css";
import { Button, List } from "@mui/material";
import { useQuery, gql } from "@apollo/client";


const BlogList = () => {
    const [blogData, setData] = useState({ id: null, title: "", content: "", author: "" }
    );
    const GET_BLOGS = gql`
    query getBlogs{
        blogs{
            id
            author
            title
            content
    }
}
`
    const { data } = useQuery(GET_BLOGS);
    console.log(data);
    const blogs = data && data.blogs;

    React.useEffect(() => {
        let blogs_ = blogs && blogs.map(obj => ({
            id: obj.id,
            title: obj.title,
            content: obj.content,
            author: obj.author
          }));
        const blog0 = blogs_ && blogs_[0];
        console.log(blog0);
        blog0 && setData(blog0);
      }, [data]);

    return (
        <div style={{ display: "flex" }}>
            <div className="bg-gray-200 blog-list p-4 mr-4 rad scrol" >
                <h1 className='font-extrabold m-6 text-center text-2xl'>All Blogs</h1>
                {blogs && blogs?.map((blog) => (
                    <List key={blog.id}>
                        <Button

                            onClick={() => {
                                setData(blog && blog);
                            }}
                            color="primary"
                        >
                            <div className="blog-preview border-b-2 font-extrabold" key={blog.id} >
                                <h2>{blog.title}</h2>
                            </div>
                        </Button>
                    </List>
                ))}
            </div>
            <div className="bg-gray-200 blog-details  p-4 rad" style={{ flex: "5" }}>
                <List>
                    <article>
                        <h2>{blogData.title}</h2>
                        <div>{blogData.content}</div>
                    </article>
                </List>
            </div>
        </div>
    );
}

export default BlogList;