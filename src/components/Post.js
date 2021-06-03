import React from "react";
import "./Post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Post(props) {
  let today = new Date();
  let date =
    today.getDate() + " " + today.toLocaleString("default", { month: "long" });

  return (
    <div className="postContainer">
      <div className="postHeading">
        <div className="leftPostHeading">
          <img
            src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/152654613_3915330898588399_4782165552085454115_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CzVM6faoPrgAX_b_9Dv&_nc_ht=scontent.fdel18-1.fna&oh=f130c29fe072051467a87a3aeabca15c&oe=60DC2C17"
            alt=""
          />
          <div className="name-date">
            <h4>Ramesh Shah</h4>
            <p>{date}.🌐</p>
            {/* <LanguageIcon style={{ fontSize: 10 }} /> */}
          </div>
        </div>
        <div className="rightPostHeading">
          <MoreHorizIcon />
        </div>
      </div>
      <img src={props.img} alt="" />
    </div>
  );
}

export default Post;
