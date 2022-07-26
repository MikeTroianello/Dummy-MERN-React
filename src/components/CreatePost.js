import React from "react";
import { post } from "../services/service";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [content, setContent] = React.useState("");
  const [status, setStatus] = React.useState("");

  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();
    try {
      if (content.length < 4) {
        setStatus("Please type something of actual merit");
      } else {
        let response = await post("/", { content: content });
        console.log(response);
        navigate("/all-posts");
      }
    } catch (err) {
      setStatus("Something went wrong");
    }
  };

  return (
    <div>
      <form onSubmit={create}>
        <label>Create your post</label>
        <textarea
          columns={40}
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default CreatePost;
