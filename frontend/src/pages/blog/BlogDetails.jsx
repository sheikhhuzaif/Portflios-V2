import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = (id) => {

    const [blogs, setBlogs] = useState([
        { id: 1, title: "How to create resume", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum ........." },
        { id: 2, title: "How to create portfolio", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum  ........." },
        { id: 3, title: "How to use ml feature", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum  ........." },
        { id: 4, title: "How to earn millions ", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum  ........." },
        { id: 5, title: "How to do randi rona ", body: "Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum Lawdem ibsum chumsum sumsum bumsum  ........." }
    ]);



    return (
        <div className="blog-details">
            {blogs.map(blog => (

                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                </article>

            ))}


        </div>
    );
}

export default BlogDetails;