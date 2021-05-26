import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useParams } from "react-router-dom";

const axios = require("axios").default;

const EditPost = (props) => {
  const { id } = useParams();

  
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const inputTitleRef = useRef();

 

  useEffect(() => {
    const foundPostToEdit = props.edit.find((post) => post.id === id);

    if (foundPostToEdit && id) {
      console.log(foundPostToEdit);
      setTitle(foundPostToEdit.title);
      console.log(foundPostToEdit.content);
    }
  }, []);

  const handleBody = (data) => {
    setContent(data);
  };

  const titleValue = (title) => {
    if (!title) {
      const foundPostToEdit = props.edit.find((post) => post.id === id);
      if (foundPostToEdit) {
        return foundPostToEdit.title;
      }
    } else {
      return title;
    }
  };

  const quillValue = (quillContent) => {
    if (!quillContent) {
      const foundPostToEdit = props.edit.find((post) => post.id === id);
      if (foundPostToEdit) {
        return foundPostToEdit.content;
      }
    } else {
      return quillContent;
    }
  };

  const updateBlogs = async (id, title, content) => {
 
    var data = { id, title, content };
    try {
      axios.post("http://localhost:3001/post/update", data).then((res) => {
        props.sendGetRequest();
        window.location.replace("/");
      });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };


  return (
    <section className="section-1 addPost">
      <div className="main-container">
      
        <div className="blog-form">
          <form>
            <div className="form-group">
              <h3>Title</h3>
              <input
                value={titleValue(title)}
                onChange={(e) => setTitle(e.target.value)}
                ref={inputTitleRef}
                type="text"
                className="form-control border border-dark"
                id="inputTitle"
                border
                border-dark
              />
            </div>
            <div className="form-group">
              <h3>Content</h3>
              <ReactQuill
                value={quillValue(content)}
                className="border border-dark"
                placeholder="write something amazing..."
                modules={EditPost.modules}
                formats={EditPost.formats}
                onChange={handleBody}
                id="inputContent"
              />
            </div>

            <button
              onClick={() => {
                updateBlogs(id, title, content);
              }}
              type="button"
              className="btn btn-primary mt-5"
            >
              <h3>Save</h3>
            </button>
          </form>
    
        </div>
        
      </div>
    </section>
  );
};

EditPost.modules = {
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
EditPost.formats = [
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

/*
 * PropType validation
 */

export default EditPost;

