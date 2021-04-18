import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [post, setPost] = useState({ title: "", content: "" });
  const [isExpanded, SetIsExpanded] = useState(false);
  function handleChange(event) {
    setPost(function (prevValue) {
      const { name, value } = event.target;
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function expand() {
    SetIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note"> 
        {isExpanded ? <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={post.title}
        /> : null}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1" }
          value={post.content}
        />
        <Zoom in={isExpanded}>
        <Fab
          onClick={(event) => {
            props.onAction(post);
            setPost({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          <AddCircleIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
