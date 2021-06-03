import React from "react";
import "./Post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";


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
      <div className="like-comment">
        <p>10 likes</p>
        <p>5 comments</p>
      </div>
      <div className="reactSection">
        <div className="reactOption">
          <ThumbUpAltIcon />
          <p>Like</p>
        </div>
        <div className="reactOption">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="reactOption">
          <NearMeIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
