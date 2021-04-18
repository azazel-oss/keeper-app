import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [postList, setPostList] = useState([]);

  function addItem(note) {
    setPostList((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteItem(id) {
    setPostList((prevValue) => {
      return prevValue.filter((post, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAction={addItem} />
      {postList.map((post, index) => {
        return (
          <Note
            onAction={deleteItem}
            key={index}
            id={index}
            title={post.title}
            content={post.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
