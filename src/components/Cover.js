import React from "react";
import "./Cover.css";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Navbar from "./Navbar";

export const Cover = () => {
  return (
    <div className="cover-container">
      <img
        src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-0/p480x480/151769862_3911149799006509_396052294660742275_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=hMqP9iyOGA8AX_qOG07&_nc_ht=scontent.fdel18-1.fna&tp=6&oh=4411470aac14b986c34c9470c14c5986&oe=60DA0213"
        alt=""
        className="coverImg"
      />
      <img
        src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/152654613_3915330898588399_4782165552085454115_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CzVM6faoPrgAX_b_9Dv&_nc_ht=scontent.fdel18-1.fna&oh=f130c29fe072051467a87a3aeabca15c&oe=60DC2C17"
        alt=""
        className="profileImg"
      />
      <div className="addProfileImg">
        <CameraAltIcon />
      </div>
      <div className="editCoverImg">
        <CameraAltIcon />
        <p>Edit Cover Photo</p>
      </div>
      <div className="userTitle">
        <h1>Ramesh Shah</h1>
        <p>Software Developer</p>
        <p className="edit">Edit</p>
      </div>
      <Navbar />
    </div>
  );
};
