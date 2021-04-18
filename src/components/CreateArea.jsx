import React, { useState } from "react";

function CreateArea(props) {
  const [post, setPost] = useState({ title: "", content: "" });
  function handleChange(event) {
    setPost(function (prevValue) {
      const { name, value } = event.target;
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={post.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={post.content}
        />
        <button
          onClick={(event) => {
            props.onAction(post);
            setPost({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
