import React from 'react';
import { useParams } from "react-router-dom";
//import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const axios  = require("axios").default;

const PostDetails = (props) => {

    const  {id} = useParams();

    const foundPost = props.showPostDetails.find((post) => id === post.id);

    const updateBlog = async (id) => {
        try {
            axios
            .post("http://localhost:3001/posts/update", {id: id})
            .then((res) => props.sendGetRequest())
        }catch (error) {
            console.log(error)
        }
    }

    return (
      <section className="post-section">
        {foundPost ? (
         
                <div className="card-body">
                  <h1 className="card-title">{foundPost.title}</h1>
                  <p
                    dangerouslySetInnerHTML={{ __html: foundPost.content }}
                    className="card-text"
                  ></p>
                  <button
                    onClick={() => {
                      updateBlog(foundPost.id);
                    }}
                  >
                    Edit
                  </button>
                </div>
             
        ) : null}
      </section>
    );
};

export default PostDetails;