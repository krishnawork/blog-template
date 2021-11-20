import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedBlog } from "../redux/action/blog-action";

function BlogListing() {
  let blogs = useSelector((state) => state.allBlogs.blogs);
  const history = useHistory();
  const dispatch = useDispatch();

  let goBlogDetails = (blog) => {
    dispatch(selectedBlog(blog));
    history.push(`/blog/${blog.title}`);
  };

  const renderList = blogs.map((blog, index) => {
    const { imageUrl, title, description } = blog;
    return (
      <div className="four wide column" key={index}>
        {/* <Link to={`/blog/${id}`}> */}
        <div className="ui link cards">
          <div className="card">
            <div className="image" style={{ height: "170px" }}>
              <img style={{ height: "100%" }} src={imageUrl} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="des-text">{description}</div>
            </div>
            <div className="ui inverted segment">
              <button
                className="ui inverted primary button"
                onClick={() => goBlogDetails(blog)}
              >
                Read more...
              </button>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    );
  });
  return <div className="ui grid container">{renderList}</div>;
}

export default BlogListing;
