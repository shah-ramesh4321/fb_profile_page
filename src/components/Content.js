import React from "react";
import "./Content.css";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import FlagIcon from "@material-ui/icons/Flag";
import Post from "./Post";

function Content() {
  return (
    <div className="main-container">
      <div className="leftContainer">
        <div className="intro">
          <h2>Intro</h2>
          <div className="introItem">
            <HomeIcon />
            <p>Lives in Delhi</p>
          </div>
          <div className="introItem">
            <FavoriteIcon />
            <p>Single</p>
          </div>
          <div className="introItem">
            <HomeIcon />
            <p>Lives in Delhi</p>
          </div>
          <div className="introItem">
            <AccessTimeIcon />
            <p>Joined on May 2011</p>
          </div>
          <div className="introItem">
            <RssFeedIcon />
            <p>Followed by 225 People</p>
          </div>
          <div className="editDetails">
            <h4>Edit details</h4>
          </div>
          <div className="hobbies">
            <button>🚀 Learn to code</button>
            <button>💻 coding</button>
            <button>🏏Cricket</button>
            <button>🏏Cricket</button>
            <button>🏏Cricket</button>
            <button>🚶‍Hiking</button>
            <button>🧳Travelling</button>
          </div>
          <div className="editHobbies">
            <h4>Edit hobbies</h4>
          </div>
        </div>
        <div className="photosContainer">
          <div className="photoHeading">
            <h3>Photos</h3>
            <p>See All Photos</p>
          </div>
          <div className="imgCollection">
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/129941894_3706887542766070_4943238055576509691_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9PZnD6PViwsAX8FvrVk&_nc_ht=scontent.fdel18-1.fna&oh=a090be475d5c54dc043e74425949415f&oe=60DBAF7E"
              alt=""
            />
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/95050305_1401301353387663_1397279013168218112_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=bftV-8QV0isAX8zcmrh&_nc_ht=scontent.fdel18-1.fna&oh=2efa8ff117fb7170a8f84c6da9b19269&oe=60DBB877"
              alt=""
            />
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/44543184_2041711645950343_9129910662275792896_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=u1AIiSCxgbwAX_19pdv&tn=AFYTxNCmxpRUDOzs&_nc_ht=scontent.fdel18-1.fna&oh=00fab23402da3541de302dcd462146ff&oe=60DC5B5A"
              alt=""
            />
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/129941894_3706887542766070_4943238055576509691_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9PZnD6PViwsAX8FvrVk&_nc_ht=scontent.fdel18-1.fna&oh=a090be475d5c54dc043e74425949415f&oe=60DBAF7E"
              alt=""
            />
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/95050305_1401301353387663_1397279013168218112_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=bftV-8QV0isAX8zcmrh&_nc_ht=scontent.fdel18-1.fna&oh=2efa8ff117fb7170a8f84c6da9b19269&oe=60DBB877"
              alt=""
            />
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/44543184_2041711645950343_9129910662275792896_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=u1AIiSCxgbwAX_19pdv&tn=AFYTxNCmxpRUDOzs&_nc_ht=scontent.fdel18-1.fna&oh=00fab23402da3541de302dcd462146ff&oe=60DC5B5A"
              alt=""
            />
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/129941894_3706887542766070_4943238055576509691_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9PZnD6PViwsAX8FvrVk&_nc_ht=scontent.fdel18-1.fna&oh=a090be475d5c54dc043e74425949415f&oe=60DBAF7E"
              alt=""
            />
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/95050305_1401301353387663_1397279013168218112_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=bftV-8QV0isAX8zcmrh&_nc_ht=scontent.fdel18-1.fna&oh=2efa8ff117fb7170a8f84c6da9b19269&oe=60DBB877"
              alt=""
            />
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/44543184_2041711645950343_9129910662275792896_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=u1AIiSCxgbwAX_19pdv&tn=AFYTxNCmxpRUDOzs&_nc_ht=scontent.fdel18-1.fna&oh=00fab23402da3541de302dcd462146ff&oe=60DC5B5A"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="rightContainer">
        <div className="createPost">
          <div className="newPost">
            <img
              src="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/152654613_3915330898588399_4782165552085454115_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CzVM6faoPrgAX_b_9Dv&_nc_ht=scontent.fdel18-1.fna&oh=f130c29fe072051467a87a3aeabca15c&oe=60DC2C17"
              alt=""
            />
            <input type="text" placeholder="What's on your mind?" />
          </div>
          <div className="upload">
            <div className="uploadOption liveIcon">
              <VideoCallIcon />
              <p>Live video</p>
            </div>
            <div className="uploadOption photo-video">
              <PhotoLibraryIcon />
              <p>Photo/Video</p>
            </div>
            <div className="uploadOption lifeEvent">
              <FlagIcon />
              <p>Life Events</p>
            </div>
          </div>
        </div>

        <Post
          img={
            "https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/92213028_3034867249968106_3834453738517430272_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=b11Ei6BzIWMAX9W2cRG&_nc_ht=scontent.fdel18-1.fna&oh=19b33953803a9625a720d8e8e1e88481&oe=60DE2D9C"
          }
        />
        <Post img="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/89487914_2969683786486453_4578356144497491968_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=rznS-o8tB7UAX8lzME3&_nc_ht=scontent.fdel18-1.fna&oh=16fde5a6364d116d1fed8c1f5f6d67e1&oe=60DBFA9D" />
        <Post
          img={
            "https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/55564463_2268646213256884_484628544719159296_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=19026a&_nc_ohc=S22VRs8aiAkAX83UYW4&_nc_ht=scontent.fdel18-1.fna&oh=9d8648aba8a5c2d7e05691e1898d050e&oe=60DD9CF7"
          }
        />
        <Post
          img={
            "https://scontent.fdel18-1.fna.fbcdn.net/v/t1.18169-9/11072174_751140478340806_4386942387036731402_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=19026a&_nc_ohc=ILPiQhJhO7oAX-pR9gi&_nc_ht=scontent.fdel18-1.fna&oh=3d9714a0b8d8f1e731d1ed28839ab752&oe=60DCFDB4"
          }
        />
        
      </div>
    </div>
  );
}

export default Content;
