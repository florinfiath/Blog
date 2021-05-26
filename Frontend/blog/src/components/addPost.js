import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from "react-quill";
import "../css/style.css";
const axios = require('axios').default;



const AddPost = (props) => {

   const [title, setTitle] = useState("")

   const titleRef = useRef();
   const contentRef = useRef();

const handleBody = (e) => {
  console.log(e);
  contentRef.current.value = e;
};

const setPost = async (postTitle, postContent) => {
  try{
    axios
    .post("http://localhost:3001/post/",{
      title: postTitle,
      content: postContent
    })
    .then((response) =>{
      props.sendGetRequest({title})
    })  
} catch(error) {
  console.log(error)
}
};

const setPostOnClick = async () => {
  setPost(
    titleRef.current.value,
    contentRef.current.value
  );
  setTitle("");
  
};

    return (
      <div className="">
        <form>
          <div class="form-group">
            <h3>Add a New Post</h3>
            <p>Title:</p>
            <input
              type="text"
              class="form-control"
              id="addTitlePost"
              placeholder="Enter post title"
              ref={titleRef}
            />
          </div>
          <div class="form-group">
            <p>Content:</p>
            <ReactQuill
              className="border border-dark"
              placeholder="write something amazing..."
              modules={AddPost.modules}
              formats={AddPost.formats}
              onChange={handleBody}
              ref={contentRef}
              id="inputContent"
            />
          </div>
           <Link to="/">
              <button
                onClick={() => {setPostOnClick();props.sendGetRequest()}
                }
                type="button"
                className="btn btn-primary mt-5"
              >Save
              </button>
              </Link>
        </form>
      </div>
    );
};

AddPost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
AddPost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default AddPost;