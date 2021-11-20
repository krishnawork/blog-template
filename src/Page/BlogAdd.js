import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { AddBlog } from "../redux/action/blog-action";
import { useHistory } from "react-router";

function BlogAdd() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [data, setData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  let handleTitleChange = (event) => {
    setData({
      ...data,
      title: event.target.value,
    });
  };
  let handleDescriptionChange = (event) => {
    setData({
      ...data,
      description: event.target.value,
    });
    console.log("data", data);
  };
  let handleImageChange = (event) => {
    let file = document.querySelector('input[type="file"]').files[0];
    if (!file) return;
    getBase64(file).then((url) => {
      setData({
        ...data,
        imageUrl: url,
      });
    });
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  let addBlog = () => {
    if ((data.title, data.description, data.imageUrl)) {
      dispatch(AddBlog(data));
      Swal.fire({
        icon: "success",
        text: "Blog Added successfully",
      }).then(() => {
        history.push(`/home`);
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "Please Fill Form!",
      });
    }
  };

  return (
    <div className="ui container blog-add">
      <div className="ui inverted segment">
        <h3 className="ui header" style={{ textAlign: "center" }}>
          Blog Add Form
        </h3>
        <div className="ui inverted form">
          <div className="two fields">
            <div className="field">
              <label>Blog Title</label>
              <input
                placeholder="Title"
                type="text"
                onChange={(event) => handleTitleChange(event)}
              />
            </div>
          </div>
          {/* text Area */}
          <div className="field">
            <label>Blog Description</label>
            <textarea
              onChange={(event) => handleDescriptionChange(event)}
            ></textarea>
          </div>
          {/* input file */}
          <div className="field">
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                handleImageChange(event);
              }}
            />
          </div>

          <div className="ui submit button" onClick={addBlog}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogAdd;
