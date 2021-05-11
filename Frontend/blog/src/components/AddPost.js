import React from 'react';


const AddPost = () => {
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
            />
          </div>
          <div class="form-group">
            <p>Content:</p>
            <input
              type="text"
              class="form-control"
              id="addContent"
              placeholder="add content"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
};

export default AddPost;