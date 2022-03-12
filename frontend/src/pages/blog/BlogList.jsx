import { useState } from 'react';
import "./blog.css";
import { Button, List } from "@mui/material";


const BlogList = () => {
    const [blogs] = useState([
        { id: 1, title: "How to create resume", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum ........." },
        { id: 2, title: "How to create portfolio", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum  ........." },
        { id: 3, title: "How to use ml feature", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum   ........." },
        { id: 4, title: "How to earn millions ", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum  ........." },
        { id: 5, title: "How to do randi rona ", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum  ........." }
    ]);

    const [data, setData] = useState({ id: 1, title: "How to create resume", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsumLawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ibsum chumsum sumsum bumsum ........." }
    );


    return (
        <div style={{ display: "flex" }}>
            <div className="bg-gray-200 blog-list p-4 mr-4 rad scrol" >
                <h1 className='font-extrabold m-6 text-center text-2xl'>All Blogs</h1>
                {blogs.map(blog => (
                    <List key={blog.id}>
                        <Button

                            onClick={() => {
                                // setId(blog.id);
                                setData(blog);
                            }}
                            color="primary"
                        >
                            <div className="blog-preview border-b-2 font-extrabold" key={blog.id} >

                                {/* <Link to={`/blogs/${blog.id}`}> */}
                                <h2>{blog.title}</h2>
                                {/* </Link> */}
                            </div>
                        </Button>
                    </List>
                ))}
            </div>
            <div className="bg-gray-200 blog-details  p-4 rad" style={{ flex: "5" }}>
                <List>
                    <article>
                        <h2>{data.title}</h2>
                        <div>{data.body}</div>
                    </article>
                </List>
            </div>
        </div>
    );
}

export default BlogList;