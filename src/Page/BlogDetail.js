import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function BlogDetail() {
  const { blogId } = useParams();
  const history = useHistory();
  let blog = useSelector((state) => state.blog);
  const { imageUrl, title, description } = blog;
  console.log("blog", blog);

  useEffect(() => {
    if (Object.keys(blog).length === 0) {
      history.push(`/home`);
    }
  }, [blog]);
  // const dispatch = useDispatch();
  // let blog = useSelector((state) => state.blog);
  // const { id,imageUrl, title, description } = blog;

  return (
    <div className="ui grid container detail-container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider"></div>
          <div className="row">
            <div className="column lp">
              <img className="ui fluid image" src={imageUrl} alt="imageUrl" />
            </div>
            <div className="column rp">
              <div
                style={{ marginBottom: "10px", position: "sticky", top: "0px" }}
                className="ui inverted segment"
              >
                <h1>{title}</h1>
              </div>

              <p className="detail-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
